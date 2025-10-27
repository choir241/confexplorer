import { createContext } from "react";
import { type Session } from "@supabase/supabase-js";
import { type IUser } from "../interfaces/Auth";

type TAuth = {
  session: Session | null;
  loading: boolean;
  users: IUser[] | null;
};

export const AuthSession = createContext<TAuth>({
  session: null,
  loading: true,
  users: [],
});
