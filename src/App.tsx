import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import User from "./pages/User/User";
import Header from "./component/Header";
import { useState, useEffect } from "react";
import { type Session } from "@supabase/supabase-js";
import { supabase } from "./static/supabaseClient";
import { AuthSession } from "./middleware/Context";
import RedirectAuthPage from "./middleware/redirectPages/RedirectAuthPage";
import RedirectUserPage from "./middleware/redirectPages/RedirectUserPage";
import type { IUser } from "./interfaces/Auth";

export default function App() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<IUser[] | null>([]);

  useEffect(() => {
    async function grabUsersData() {
      const { data, error } = await supabase.from("Users").select();

      if (error) {
        throw new Error(
          `There was an error fetching data from the Users Supabase table: ${error}`,
        );
      }

      setUsers(data);
      setLoading(false);
    }

    grabUsersData();

    // checks whos logged in right now
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    // checks if there was any change to the auth in real time
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <AuthSession.Provider value={{ session, loading, users }}>
      <BrowserRouter>
        <Routes>
          <Route element={<Header />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/user"
              element={
                <RedirectUserPage>
                  <User />
                </RedirectUserPage>
              }
            ></Route>
            <Route
              path="/auth"
              element={
                <RedirectAuthPage>
                  <Auth />
                </RedirectAuthPage>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthSession.Provider>
  );
}
