import { createContext } from "react";
import { type Session } from "@supabase/supabase-js";

type TAuth = {
    session: Session | null,
    loading: boolean
}
export const AuthSession = createContext<TAuth>({session: null, loading: true});