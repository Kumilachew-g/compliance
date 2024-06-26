import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdBarChart,
  MdPerson,
  MdLock,
  MdSupervisorAccount,
  MdOutlineMapsHomeWork,
  MdSupervisedUserCircle,
  MdBook,
  MdBookmark,
} from "react-icons/md";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },

  {
    name: "ተቋማት",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
  },
  {
    name: "ሠራተኞች",
    layout: "/admin",
    icon: <MdSupervisedUserCircle className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
  },
  {
    name: "አድራሻ",
    layout: "/admin",
    icon: <MdOutlineMapsHomeWork className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
  },
  {
    name: "ቅሬታ",
    layout: "/admin",
    icon: <MdBookmark className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
  },
  {
    name: "የቅሬታ መልስ",
    layout: "/admin",
    icon: <MdBook className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
  },
  {
    name: "ተጠቃሚዎች",
    layout: "/admin",
    icon: <MdSupervisorAccount className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
];
export default routes;
