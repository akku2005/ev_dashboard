// routes.js

import AuthLogin from "./auth/Login/AuthLogin";
import Register from "./auth/Register/Resister";
import Dashboard from "./components/Dashboard/Dashboard";
import Customers from "./pages/Customers";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import ForgetPassword from "./auth/ForgetPassword/ForgetPassword";
import UserDetails from "./components/UserDetails/UserDetails";
import Payments from "./components/Payments/Payments";
import Vehicle from "./pages/Vehicle";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const routes = [
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <AuthLogin />,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },
  {
    path: "/admin/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/admin/dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "/admin/customer",
    element: <Customers />,
  },
  {
    path: "/admin/user-details",
    element: <UserDetails />,
  },
  {
    path: "/admin/payments",
    element: <Payments />,
  },
  {
    path: "/admin/vehicle",
    element: <Vehicle />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];

export default routes;
