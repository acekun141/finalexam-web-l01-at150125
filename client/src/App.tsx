import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { PublicRoute } from "./container/components";
import SchedulePage from "./pages/SchedulePage";
import ListAccountPage from "./pages/ListAccountPage";
import AdminDashboard from "./pages/AdminDashboard";
import ListClassPage from "./pages/ListClassPage";
import AccountDetail from "./pages/AccountDetailt";
import TeacherListPage from "./pages/TeacherListPage";
import StudentListPage from "./pages/StudentListPage";
import MessagePage from "./pages/MessagePage";
import PaymentPage from "./pages/PaymentPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PublicRoute isAuthenticated={true} restricted={false} exact component={AdminDashboard} path="/" />
          <PublicRoute isAuthenticated={true} restricted={false} exact component={ListAccountPage} path="/account-list" />
          <PublicRoute isAuthenticated={true} restricted={false} exact component={TeacherListPage} path="/teacher-list" />
          <PublicRoute isAuthenticated={true} restricted={false} exact component={StudentListPage} path="/student-list" />
          <PublicRoute isAuthenticated={true} restricted={false} exact component={SchedulePage} path="/schedule" />
          <PublicRoute isAuthenticated={true} restricted={false} exact component={ListClassPage} path="/classes" />
          <PublicRoute isAuthenticated={true} restricted={false} exact component={MessagePage} path="/message" />
          <PublicRoute isAuthenticated={true} restricted={false} exact component={AccountDetail} path="/account/:id" />
          <PublicRoute isAuthenticated={true} restricted={false} exact component={PaymentPage} path="/payment" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
