import React, { useContext } from "react";
import { Navigate } from "react-router";
import { AuthSession } from "../Context";
import { labels } from "../../static/labels";

export default function RedirectAuthPage({
  children,
}: {
  children: React.JSX.Element;
}) {
  const { session, loading } = useContext(AuthSession);

  if (loading) {
    return <h1>{labels.loading}</h1>;
  }

  if (session) {
    return <Navigate to="/" />;
  }

  return children;
}
