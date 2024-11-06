import { Outlet, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import SingleCourse from "../pages/SingleCourse/SingleCourse";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import profileRoutes from "./profileRoutes";
import IsNotLoggedIn from "../components/IsNotLoggedIn";
import IsLoggedIn from "../components/IsLoggedIn";
import SingleCategory from "../pages/Categories/SingleCategory/SingleCategory";
import WatchCourse from "../pages/WatchCourse/WatchCourse";
import Video from "../pages/WatchCourse/Video/Video";
import Exam from "../pages/WatchCourse/Exam/Exam";
import Material from "../pages/WatchCourse/Material/Material";
import Assignment from "../pages/WatchCourse/Assignment/Assignment";
import Search from "../pages/Search/Search";
import Leaderboard from "../pages/Leaderboard/Leaderboard";
import Notifications from "../pages/Notifications/Notifications";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import WatchCourseQuizContent from "../features/pages/WatchCourse/WatchCourseQuiz/WatchCourseQuizContent/WatchCourseQuizContent";
import Links from "../pages/WatchCourse/Links/Links";
import WatchCourseQuizLink from "../features/pages/WatchCourse/WatchCourseQuiz/WatchCourseQuizContent/WatchCourseQuizLink";
import Dashboard from "../components/Dashboard/Dashboard";
import Wallet from "../pages/Profile/Wallet/Wallet.jsx";
import DataStatistics from "../components/Dashboard/Datastatistics/DataStatistics.jsx";
import PersonalData from "../pages/Profile/PersonalData/PersonalData.jsx";
import CodeShipping from './../pages/Profile/CodeShipping/CodeShipping';
import MyCourses from "../pages/Profile/MyCourses/MyCourses.jsx";
import Security from "../pages/Profile/Security/Security.jsx";
import WatchingHistory from "../pages/Profile/WatchingHistory/WatchingHistory.jsx";
import Invoices from "../pages/Profile/Invoices/Invoices.jsx";
import ExamsResults from "../pages/Profile/ExamsResults/ExamsResults.jsx";
import AssignmentsResults from "../pages/Profile/AssignmentsResults/AssignmentsResults.jsx";
import PageAllCourses from "../components/CoursesList/PageAllCourses/PageAllCourses.jsx";
import { Helmet } from "react-helmet"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Helmet>
              <title>الصفحة الرئيسية</title>
              <meta name="description" content="مرحبًا بك في الصفحة الرئيسية" />
            </Helmet>
            <Home />
          </>
        ),
      },
      {
        path: "/privacy-policy",
        element: (
          <>
            <Helmet>
              <title>سياسة الخصوصية</title>
              <meta name="description" content="تعرف على سياسة الخصوصية الخاصة بنا." />
            </Helmet>
            <PrivacyPolicy />
          </>
        ),
      },
      {
        path: "allcourses",
        element: <PageAllCourses />,
      },
      {
        path: "/courses",
        children: [
          {
            path: ":slug",
            element: <SingleCourse />,
          },
          {
            path: "watch/:slug/:lessonSlug?",
            element: (
              <IsLoggedIn>
                <WatchCourse />
              </IsLoggedIn>
            ),
            children: [
              {
                path: "",
                children: [
                  { path: "video/:itemSlug", element: <Video /> },
                  { path: "quiz/:itemSlug", element: <Exam /> },
                  { path: "assignment/:itemSlug", element: <Assignment /> },
                  { path: "material/:itemSlug", element: <Material /> },
                  { path: "links/:itemSlug", element: <Links /> },
                ],
              },
            ],
          },
        ],
      },
      {
        path: "/categories",
        children: [
          {
            path: ":id",
            element: <SingleCategory />,
          },
        ],
      },
      {
        path: "profile",
        element: (
          <IsLoggedIn>
            <Outlet />
          </IsLoggedIn>
        ),
        children: profileRoutes,
      },
      {
        path: "dashboard",
        element: <IsLoggedIn><Dashboard /></IsLoggedIn>,
        children: [
          { path: "personalInformation", element: <IsLoggedIn><PersonalData /></IsLoggedIn> },
          { path: "datastatistics", element: <IsLoggedIn><DataStatistics /></IsLoggedIn> },
          { path: "codeShipping", element: <IsLoggedIn><CodeShipping /></IsLoggedIn> },
          { path: "wallet", element: <IsLoggedIn><Wallet /></IsLoggedIn> },
          { path: "myCourses", element: <IsLoggedIn><MyCourses /></IsLoggedIn> },
          { path: "security", element: <IsLoggedIn><Security /></IsLoggedIn> },
          { path: "watchingHistory", element: <IsLoggedIn><WatchingHistory /></IsLoggedIn> },
          { path: "invoices", element: <IsLoggedIn><Invoices /></IsLoggedIn> },
          { path: "assignmentsResults", element: <IsLoggedIn><AssignmentsResults /></IsLoggedIn> },
          { path: "examsResults", element: <IsLoggedIn><ExamsResults /></IsLoggedIn> },
        ],
      },
      {
        path: "/login",
        element: (
          <IsNotLoggedIn>
            <Login />
          </IsNotLoggedIn>
        ),
      },
      {
        path: "/register",
        element: (
          <IsNotLoggedIn>
            <Register />
          </IsNotLoggedIn>
        ),
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/leaderboard/:page?",
        element: <Leaderboard />,
      },
      {
        path: "/notifications/:page?",
        element: <Notifications />,
      },
    ],
  },
  {
    path: "/courses/watch/:slug/:lessonSlug/quiz/:itemSlug/start",
    element: (
      <div className="exam-container">
        <WatchCourseQuizContent type="quiz" withTimer={true} />
      </div>
    ),
  },
  {
    path: "/student/exams/access/:token",
    element: (
      <div className="exam-container">
        <IsLoggedIn>
          <WatchCourseQuizLink withTimer={true} type="quiz" />
        </IsLoggedIn>
      </div>
    ),
  },
]);

export default router;