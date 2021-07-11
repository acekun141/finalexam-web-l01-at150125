import App from "./app";
import UserRouter from "./user/user.router";
import AuthRouter from "./auth/auth.router";
import UserInfoRouter from "./userInfo/userInfo.router";

const app = new App([new UserRouter(), new AuthRouter(), new UserInfoRouter()]);

app.run();
