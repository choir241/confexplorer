import { Outlet } from "react-router";
import { label } from "../static/label";
import { useContext } from "react";
import { AuthSession } from "../middleware/Context";
import { supabase } from "../static/supabaseClient";

export default function Header() {

  const session = useContext(AuthSession);
  async function signOut() {
    const { error } = await supabase.auth.signOut();
    console.log(error);
  }

  return (
    <>
      <header>
        <nav>
          <h1><a href = "/">{label.header.h1}</a></h1>
          {session ?
          <button className="button" onClick={()=>signOut()}>{label.header.logout}</button>
          :
          <a href = "/auth" className="button">{label.header.auth}</a>
          }
        </nav>
      </header>

      <Outlet/>
    </>
  );
}
