import { labels } from "../../static/labels";
import { useContext, useState } from "react";
import { AuthSession } from "../../middleware/Context";
import "./User.css";
import { type ISelectedConnection } from "../../interfaces/Auth";
import CurrentUserInfo from "../../component/User/CurrentUserInfo";
import Connections from "../../component/Connection/Connections";
import SelectedUserInfo from "../../component/User/SelectedUserInfo";

export default function User() {
  const { session, loading, users } = useContext(AuthSession);
  const [selectedConnection, setSelectedConnection] =
    useState<ISelectedConnection | null>(null);

  if (loading || !users || !session) {
    return <h1>{labels.loading}</h1>;
  }

  const currentUser = users.find((user) => {
    return user.user_id === session.user.id;
  });

  return (
    <section id="user">
      {currentUser ? (
        <div className="flex justify-between">
          <CurrentUserInfo findCurrentUser={currentUser} />

          <Connections
            findCurrentUser={currentUser}
            setSelectedConnection={setSelectedConnection}
          />

          <SelectedUserInfo
            selectedConnection={selectedConnection}
            currentUser={currentUser}
            setSelectedConnection={setSelectedConnection}
          />
        </div>
      ) : (
        <h1>{labels.loading}</h1>
      )}
    </section>
  );
}
