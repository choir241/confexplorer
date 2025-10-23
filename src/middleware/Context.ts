import { createContext } from "react";
import { type Session } from "@supabase/supabase-js";
import { type IUser } from "../pages/User/User";

type TAuth = {
  session: Session | null;
  loading: boolean;
  connections: IUser[] | null;
};

export const AuthSession = createContext<TAuth>({
  session: null,
  loading: true,
  connections: [],
});
