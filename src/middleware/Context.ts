import { createContext } from "react";
import { type Session } from "@supabase/supabase-js";

export const AuthSession = createContext<Session | null>(null);