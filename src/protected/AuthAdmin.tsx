import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { ADMIN_TOKEN } from "../components/utils/config";

export function AuthorizeAdmin({ children }: { children: ReactNode }) {
  const token = localStorage.getItem(ADMIN_TOKEN);

  if (!token) return <Navigate to={"/admin-login"} />;

  return children;
}

export const ProtectAdmin = ({ children }: { children: ReactNode }) => {
  const token = localStorage.getItem(ADMIN_TOKEN);

  if (token) return <Navigate to={"/admin"} />;

  return children;
};
