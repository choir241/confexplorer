import { createContext } from "react";
import { type Session } from "@supabase/supabase-js";
import { type IUser } from "../pages/User/User";

export interface IConnection {
  id: string;
  created_at: string;
  edited_at: string;
  user_id: string;
  connected_users: IUser[];
}

type TAuth = {
  session: Session | null;
  loading: boolean;
  connections: IConnection[] | null;
};

export const AuthSession = createContext<TAuth>({
  session: null,
  loading: true,
  connections: [],
});
