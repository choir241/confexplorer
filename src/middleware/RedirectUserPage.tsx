import React, { useContext } from "react";
import { Navigate } from "react-router";
import { AuthSession } from "./Context";
import { label } from "../static/label";

export default function RedirectUserPage({
  children,
}: {
  children: React.JSX.Element;
}) {
  const {session, loading} = useContext(AuthSession);

  if(loading){
    return <h1>{label.loading}</h1>
  }
  
  if (!session) {
    return <Navigate to = "/"/>
  }
  
  return children

}
