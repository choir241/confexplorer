import { Outlet } from "react-router";
import { labels } from "../static/labels";
import { useContext } from "react";
import { AuthSession } from "../middleware/Context";
import { supabase } from "../static/supabaseClient";
import { FaUser } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa";

export default function Header() {
  const { session, loading } = useContext(AuthSession);
  async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (loading) {
      return <h1>{labels.loading}</h1>;
    }
    console.log(error);
  }

  return (
    <>
      <header>
        <h1>
          <a href="/">{labels.header.h1}</a>
        </h1>
        <nav>
          {session ? (
            <a href="/user" className="pr-1 flex items-center">
              <FaUser className="pr-half" />
              {labels.header.user}
            </a>
          ) : (
            ""
          )}
          {session ? (
            <button
              className="button flex items-center justify-between"
              onClick={() => signOut()}
            >
              <FaPowerOff className="pr-half" />
              {labels.header.logout}
            </button>
          ) : (
            <a href="/auth" className="button items-center flex">
              <FaUser className="pr-half" /> {labels.header.auth}
            </a>
          )}
        </nav>
      </header>

      <Outlet />
    </>
  );
}
