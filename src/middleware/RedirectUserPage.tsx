import React, { useContext } from "react";
import { Navigate } from "react-router";
import { AuthSession } from "./Context";

export default function RedirectUserPage({
  children,
}: {
  children: React.JSX.Element;
}) {
  const {session, loading} = useContext(AuthSession);

  if(loading){
    return <h1>Loading...</h1>
  }
  
  if (!session) {
    return <Navigate to = "/"/>
  }
  
  return children

}
