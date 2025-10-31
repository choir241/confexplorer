import { labels } from "../../static/labels";
import { useContext, useState } from "react";
import { AuthSession } from "../../middleware/Context";
import "./User.css";
import SelectedUserNotes from "../../component/User/SelectedUserNotes";
import { type ISelectedConnection } from "../../interfaces/Auth";
import CurrentUserInfo from "../../component/User/CurrentUserInfo";
import Connections from "../../component/Connection/Connections";
import SelectedUserLabels from "../../component/User/SelectedUserLabels";

export default function User() {
  const { session, loading, users } = useContext(AuthSession);
  const [selectedConnection, setSelectedConnection] =
    useState<ISelectedConnection | null>();

  if (loading || !users || !session) {
    return <h1>{labels.loading}</h1>;
  }

  const findCurrentUser = users.find((user) => {
    return user.user_id === session.user.id;
  });

  const findSelectedConnection = users.find((user)=>{
    return user.user_id === selectedConnection?.id
  });
  
  return (
    <section id = "user">
      {findCurrentUser ? (
        <div className="flex justify-between">
          <CurrentUserInfo findCurrentUser={findCurrentUser} />

          <Connections
            findCurrentUser={findCurrentUser}
            setSelectedConnection={setSelectedConnection}
          />

          <section>
          
            {selectedConnection ? (
              <div className="usersInfoContainer">
                <section className="flex items-center justify-between w-full">
                
                <span>{findSelectedConnection ? findSelectedConnection.first_name : ""} {" "} {findSelectedConnection ? findSelectedConnection.last_name : ""}</span>
                </section>
                <SelectedUserNotes 
                selectedConnection={selectedConnection} />
        
                <SelectedUserLabels selectedConnection={selectedConnection} />
              </div>
            ) : (
              <div className="usersInfoContainer">
              </div>
            )}
          </section>
        </div>
      ) : (
        <h1>{labels.loading}</h1>
      )}
    </section>
  );
}