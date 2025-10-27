import { label } from "../../static/label";
import { useContext, useState, useEffect, useRef } from "react";
import { AuthSession } from "../../middleware/Context";
import "./User.css";
import ConnectedUser from "../../component/ConnectedUser";
import { Camera } from "react-camera-pro";
import { FaCamera } from "react-icons/fa6";

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

interface ISelectedUser {
  id: string;
  had_coffee_chat: boolean;
  bookmark_connection: boolean;
  labels: string[];
  notes: string[];
}

export default function User() {
  const { session, loading, connections } = useContext(AuthSession);

  if (loading || !connections || !session) {
    return <h1>{label.loading}</h1>;
  }

  const [selectedConnection, setSelectedConnection] = useState<string>("");
  const [selectedUser, setSelectedUser] = useState<ISelectedUser | null>();

  const currentUserConnections = connections.find((connection) => {
    return connection.user_id === session.user.id;
  });

  useEffect(() => {
    if (currentUserConnections) {
      const findSelectedUser = currentUserConnections.connected_users.find(
        (user: IUser) => {
          return user.id === selectedConnection;
        }
      );

      setSelectedUser(findSelectedUser);
    }
  }, [selectedConnection, currentUserConnections]);

  const camera = useRef(null);

  return (
    <>
      {currentUserConnections ? (
        <div className="flex justify-between">
          <section>
            <h1>
              {currentUserConnections.first_name}{" "}
              {currentUserConnections.last_name}
            </h1>
            <h2>{currentUserConnections.curr_company}</h2>
            <h3>{currentUserConnections.curr_role}</h3>
            <button
              onClick={() => (
                <Camera
                  ref={camera}
                  errorMessages={{
                    noCameraAccessible:
                      "Camera is currently unaccessible. Please connect your camera or try again.",
                    permissionDenied:
                      "Permission denied. Please check your permissions settings in your device and try again.",
                    switchCamera:
                      "It is currently not possible to switch camera to a different one due to there only being one camera device.",
                    canvas: "Canvas is not supported",
                  }}
                />
              )}
            >
              <FaCamera />
            </button>

            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?data=${currentUserConnections.linkedin_link}&size=[200]x[200]&ecc=[low]`}
            />
          </section>

          <section className="connectionsContainer">
            {currentUserConnections ? (
              currentUserConnections.connected_users.map((user: IUser) => {
                return (
                  <ConnectedUser
                    setSelectedConnection={setSelectedConnection}
                    user={user}
                    key={user.user_id}
                  />
                );
              })
            ) : (
              <h4>{label.user.h4}</h4>
            )}
          </section>

          <section>
            {selectedUser ? (
              <div>
                <ul>
                  {selectedUser.notes.map((note: string) => {
                    return <li>{note}</li>;
                  })}
                </ul>

                <div className="labels">
                  {selectedUser.labels.map((label) => {
                    return <span className="label">{label}</span>;
                  })}
                </div>
                <button>Add Label</button>
              </div>
            ) : (
              <div className="connectionsContainer"></div>
            )}
          </section>
        </div>
      ) : (
        <h1>{label.loading}</h1>
      )}
    </>
  );
}
