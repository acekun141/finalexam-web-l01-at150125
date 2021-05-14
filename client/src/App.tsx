import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { PublicRoute } from "./container/components";
import SchedulePage from "./pages/SchedulePage";
import ListAccountPage from "./pages/ListAccountPage";
import AdminDashboard from "./pages/AdminDashboard";
import ListClassPage from "./pages/ListClassPage";
import AccountDetail from "./pages/AccountDetailt";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PublicRoute isAuthenticated={true} restricted={false} exact component={AdminDashboard} path="/" />
          <PublicRoute isAuthenticated={true} restricted={false} exact component={ListAccountPage} path="/accounts" />
          <PublicRoute isAuthenticated={true} restricted={false} exact component={SchedulePage} path="/schedule" />
          <PublicRoute isAuthenticated={true} restricted={false} exact component={ListClassPage} path="/classes" />
          <PublicRoute isAuthenticated={true} restricted={false} exact component={AccountDetail} path="/account/:id" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
