import ExamResultShow from "../pages/Profile/ExamResultShow/ExamResultShow";
import AssignmentsResults from "../pages/Profile/AssignmentsResults/AssignmentsResults";
import CodeShipping from "../pages/Profile/CodeShipping/CodeShipping";
import ExamsResults from "../pages/Profile/ExamsResults/ExamsResults";
import Invoices from "../pages/Profile/Invoices/Invoices";
import MyCourses from "../pages/Profile/MyCourses/MyCourses";
import PersonalData from "../pages/Profile/PersonalData/PersonalData";
import Profile from "../pages/Profile/Profile";
import ProfileDetails from "../pages/Profile/ProfileDetails/ProfileDetails";
import Security from "../pages/Profile/Security/Security";
import Subscriptions from "../pages/Profile/Subscriptions/Subscriptions";
import Wallet from "../pages/Profile/Wallet/Wallet";
import WatchingHistory from "../pages/Profile/WatchingHistory/WatchingHistory";

const profileRoutes = [
  {
    path: "",
    element: <Profile />,
  },
  {
    path: "",
    element: <ProfileDetails />,
    children: [
      {
        path: "personal-data",
        element: <PersonalData />,
      },
      {
        path: "wallet/:page?",
        element: <Wallet />,
      },
      {
        path: "code-shipping",
        element: <CodeShipping />,
      },
      {
        path: "my-courses/:page?",
        element: <MyCourses />,
      },
      {
        path: "security",
        element: <Security />,
      },
      {
        path: "watching-history/:page?",
        element: <WatchingHistory />,
      },
      {
        path: "invoices/:page?",
        element: <Invoices />,
      },
      {
        path: "subscriptions/:page?",
        element: <Subscriptions />,
      },
      {
        path: "exams-results/",
        element: <ExamsResults />,
      },
      {
        path: "exams-results/:id",
        element: <ExamResultShow />
      },
      {
        path: "assignments-results",
        element: <AssignmentsResults />,
      },
    ],
  },
];

export default profileRoutes;
