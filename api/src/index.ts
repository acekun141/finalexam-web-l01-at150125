import App from "./app";
import UserRouter from "./user/user.router";
import AuthRouter from "./auth/auth.router";
import UserInfoRouter from "./userInfo/userInfo.router";
import TeacherRouter from "./teacher/teacher.router";
import ClassRouter from "./class/class.router";
import LessonRouter from "./lesson/lesson.router";
import StudentRouter from "./student/student.router";
import RequestRouter from "./request/request.router";

const app = new App([
  new UserRouter(),
  new AuthRouter(),
  new UserInfoRouter(),
  new TeacherRouter(),
  new ClassRouter(),
  new LessonRouter(),
  new StudentRouter(),
  new RequestRouter()
]);

app.run();
