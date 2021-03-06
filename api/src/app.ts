import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import passport from "passport";
import { Strategy, StrategyOptions } from "passport-jwt";


import { Router } from "./_interface";
import { errorMiddleware } from "./_middleware";
import { ExtractJwt } from "passport-jwt";


dotenv.config();

class App {
	public app: express.Application;

	constructor(routers: Router[]) {
		this.app = express();
		this.initializeMiddleware();
		this.initializePassport();
		this.initializeController(routers);
		this.initializeErrorHandler();
	}

	private initializeMiddleware(): void {
		this.app.use(bodyParser.json());
		this.app.use(cors());
		this.app.use(helmet());
		this.app.use(morgan('dev'));
	}

	private initializePassport(): void {
		this.app.use(passport.initialize());
		this.app.use(passport.session());
		passport.serializeUser((user: { username: string, id: string }, done) => {
			done(null, user.id);
		});
		const strategyConfig: StrategyOptions = {
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: process.env.SECRET || 'SECRET'
		};
		passport.use(new Strategy(strategyConfig, (jwtPayload, done) => {
			const expirationDate = new Date(jwtPayload.exp * 1000);
			if (expirationDate < new Date()) {
				return done(null, false);
			}
			const user = jwtPayload;
			done(null, user);
		}));
	}

	private initializeController(routers: Router[]): void {
		routers.map((router: Router) => {
			this.app.use(router.router);
		});
	}

	private initializeErrorHandler(): void {
		this.app.use(errorMiddleware);
		this.app.use((req, res) => {
			res.status(404).json({ message: "Not Found" });
		});
	}

	private listen(): void {
		const port = process.env.PORT || 8000;
		const host = process.env.HOST || 'localhost';
		this.app.listen({ port, host }, () => {
				console.log(`This app is running on ${host}:${port}`);
		});
	}

	public async run(): Promise<void> {
		try {
			await mongoose.connect(
				`${process.env.MONGO_URI}`,
				{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
			);
			this.listen();
		} catch (error) {
			console.log(error);
			console.log("Cannot connect to database");
		}
	}
}

export default App;