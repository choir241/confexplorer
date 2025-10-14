import React, { useContext } from "react";
import { Navigate } from "react-router";
import { AuthSession } from "./Context";

export default function RedirectIfAuthenticated({
  children,
}: {
  children: React.JSX.Element;
}) {
  const session = useContext(AuthSession);

  if (session) {
    return <Navigate to="/" />;
  }

  return children;
}
