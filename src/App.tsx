import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import Header from "./component/Header";
import { useState, useEffect } from "react";
import { type Session } from "@supabase/supabase-js";
import { supabase } from "./static/supabaseClient";
import { AuthSession } from "./middleware/Context";
import RedirectIfAuthenticated from "./middleware/RedirectIfAuthenticated";

export default function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <AuthSession.Provider value={session}>
      <BrowserRouter>
        <Routes>
          <Route element={<Header />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/auth"
              element={
                <RedirectIfAuthenticated>
                  <Auth />
                </RedirectIfAuthenticated>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthSession.Provider>
  );
}
