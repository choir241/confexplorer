import { label } from "../../static/label";
import { useContext } from "react";
import { AuthSession } from "../../middleware/Context";

export interface IUser {
  id: string;
  email: string;
  linkedin_link: string;
  had_coffee_chat: boolean;
  bookmark_connection: boolean;
  curr_attending_conf: string;
  attended_conf: string[];
  labels: string[];
  notes: string[];
}

export default function User() {
  const { session, loading, connections } = useContext(AuthSession);

  if (loading || !connections || !session) {
    return <h1>{label.loading}</h1>;
  }

  const currentUserConnections = connections.find(
    (connection) => connection.user_id === session.user.id
  )

  return (
    <>
      <h1>{session?.user.email}</h1>

      <h2>{label.user.h2}</h2>

      {currentUserConnections ? (
        currentUserConnections.connected_users.map((ele) => {
          return <div key={ele.id}>{ele.email}</div>;
        })
      ) : (
        <h4>{label.user.h4}</h4>
      )}
    </>
  );
}
