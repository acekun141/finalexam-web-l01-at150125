import React from "react";
import { BrowserRouter as Router,  Route,  Switch } from "react-router-dom";
import { PublicRoute } from "./container/components";
import SchedulePage from "./pages/SchedulePage";
import ListAccountPage from "./pages/ListAccountPage";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PublicRoute isAuthenticated={true} restricted={false} exact component={AdminDashboard} path="/" />
          <PublicRoute isAuthenticated={true} restricted={false} exact component={ListAccountPage} path="/accounts" />
          <PublicRoute isAuthenticated={true} restricted={false} exact component={SchedulePage} path="/schedule" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
