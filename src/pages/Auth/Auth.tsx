import {supabase} from "../../static/supabaseClient";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useContext } from "react";
import { AuthSession } from "../../middleware/Context";

export default function AuthCard() {
  
  const session = useContext(AuthSession);

  if (!session) {
    return (
      <div className="auth">
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
      </div>
    );
  }
}
