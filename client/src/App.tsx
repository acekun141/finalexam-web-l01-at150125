import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { PublicRoute, PrivateRoute } from "./container/components";
import SchedulePage from "./pages/SchedulePage";
import ListAccountPage from "./pages/ListAccountPage";
import AdminDashboard from "./pages/AdminDashboard";
import ListClassPage from "./pages/ListClassPage";
import AccountDetail from "./pages/AccountDetailt";
import TeacherListPage from "./pages/TeacherListPage";
import StudentListPage from "./pages/StudentListPage";
import MessagePage from "./pages/MessagePage";
import PaymentPage from "./pages/PaymentPage";
import LoginForm from "./components/LoginForm";
import { useLayoutEffect } from "react";
import { getUserInfoAction } from "./redux/reducer/user/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      getUserInfo();
    } else {
      setLoading(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUserInfo = async () => {
    dispatch(getUserInfoAction(() => setLoading(false)));
  }

  if (loading) return null;

  return (
    <div className="App">
      <Router>
        <Switch>
          <PublicRoute restricted={true} exact component={LoginForm} path="/login" />
          <PrivateRoute exact component={AdminDashboard} path="/" />
          <PrivateRoute exact component={ListAccountPage} path="/account-list" />
          <PrivateRoute exact component={TeacherListPage} path="/teacher-list" />
          <PrivateRoute exact component={StudentListPage} path="/student-list" />
          <PrivateRoute exact component={SchedulePage} path="/schedule" />
          <PrivateRoute exact component={ListClassPage} path="/classes" />
          <PrivateRoute exact component={MessagePage} path="/message" />
          <PrivateRoute exact component={AccountDetail} path="/account/:id" />
          <PrivateRoute exact component={PaymentPage} path="/payment" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
