import { type IUser, type ISelectedConnection } from "../../interfaces/Auth";
import ConnectedUser from "./ConnectedUser";
import { labels } from "../../static/labels";

export default function Connections({
  findCurrentUser,
  setSelectedConnection,
}: {
  findCurrentUser: IUser | undefined;
  setSelectedConnection: (
    selectedConnection: ISelectedConnection | null,
  ) => void;
}) {
  return (
    <section className="usersContainer">
      {findCurrentUser ? (
        findCurrentUser.connected_users.map((user: IUser) => {
          return (
            <ConnectedUser
              setSelectedConnection={setSelectedConnection}
              connectedUser={user}
              key={user.id}
            />
          );
        })
      ) : (
        <h4>{labels.user.h4}</h4>
      )}
    </section>
  );
}
