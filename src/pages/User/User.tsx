import { label } from "../../static/label";
import { useContext } from "react";
import { AuthSession } from "../../middleware/Context";
import "./User.css";
import ConnectedUser from "../../component/ConnectedUser";

export interface IUser {
  user_id: string;
  connected_users: [];
  first_name: string;
  last_name: string;
  id: string;
  email: string;
  linkedin_link: string;
  had_coffee_chat: boolean;
  bookmark_connection: boolean;
  curr_attending_conf: string;
  attended_conf: string[];
  labels: string[];
  notes: string[];
  curr_company: string;
  curr_role: string;
}

// [
//    {
//     "id": "3dba3a82-bb44-4b67-92f3-459ba38839e1",
//     "had_coffee_chat": false,
//     "bookmark_connection": false,
//     "labels": [
//       "DSD Discord",
//       "Torc",
//       "Stream ft Pauline"
//     ],
//     "notes": [
//       "likes wine"
//     ]
//   },
//   {
//     "id": "ea09514c-e004-4e4d-ae8c-77966809adad",
//     "had_coffee_chat": false,
//     "bookmark_connection": false,
//     "labels": [
//       "DSD Discord",
//       "Torc",
//       "Stream ft Pauline"
//     ],
//     "notes": [
//       "favorite band is Babymetal",
//       "looking for full-stack developer and technical writer roles",
//       "lives in NJ"
//     ]
//   }
// ]

export default function User() {
  const { session, loading, connections } = useContext(AuthSession);

    console.log(loading)
  console.log(connections)
  console.log(session)

  if (loading || !connections || !session) {
    return <h1>{label.loading}</h1>;
  }
  
  console.log(loading)
  console.log(connections)
  console.log(session)
  const currentUserConnections = connections.find((connection) => {
    return connection.user_id === session.user.id;
  });

  return (
    <>
    {
    currentUserConnections ? 
    <div className="flex justify-between">
      <section>
        <h1>
          {currentUserConnections.first_name} {currentUserConnections.last_name}
        </h1>
        <h2>{currentUserConnections.curr_company}</h2>
        <h3>{currentUserConnections.curr_role}</h3>
      </section>

      <section className="connectionsContainer">
        {currentUserConnections ? (
          currentUserConnections.connected_users.map((user: IUser) => {
            return <ConnectedUser user={user} key={user.user_id} />;
          })
        ) : (
          <h4>{label.user.h4}</h4>
        )}
      </section>
    </div>
    :
    <h1>{label.loading}</h1>
    }
    </>
  );
}
