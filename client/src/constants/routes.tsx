import { AdminPage } from "@/pages/AdminPage";
import { LoginPage } from "@/pages/LoginPage";
import { RegisterPage } from "@/pages/RegisterPage";

export const ROUTES_NOT_AUTH = [
  { url: "/login", component: <LoginPage /> },
  { url: "/register", component: <RegisterPage /> },
  { url: "/admin", component: <AdminPage /> },
];

export const URL = {
  register: "/register",
  login: "/login",
  main: "/",
  admin: "/admin",
};
