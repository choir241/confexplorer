import { labels } from "../../static/labels";
import { useContext, useState, useEffect } from "react";
import { AuthSession } from "../../middleware/Context";
import "./User.css";
import SelectedUserNotes from "../../component/User/SelectedUserNotes";
import { type ISelectedConnection, type IUser } from "../../interfaces/Auth";
import CurrentUserInfo from "../../component/User/CurrentUserInfo";
import Connections from "../../component/Connection/Connections";
import SelectedUserLabels from "../../component/User/SelectedUserLabels";

export default function User() {
  const { session, loading, users } = useContext(AuthSession);
  const [selectedConnection, setSelectedConnection] =
    useState<ISelectedConnection | null>();
  const [currentUser, setCurrentUser] = useState<IUser | undefined>();

  if (loading || !users || !session) {
    return <h1>{labels.loading}</h1>;
  }

  useEffect(()=>{
    setCurrentUser(users.find((user) => {
    return user.user_id === session.user.id;
  }));
  }, [users, session]);

  return (
    <section id = "user">
      {currentUser ? (
        <div className="flex justify-between">
          <CurrentUserInfo findCurrentUser={currentUser} />

          <Connections
            findCurrentUser={currentUser}
            setSelectedConnection={setSelectedConnection}
          />

          <section>
          
            {selectedConnection ? (
              <div className="usersInfoContainer">
                <section className="flex items-center justify-between w-full">
                
                <span>{currentUser ? currentUser.first_name : ""} {" "} {currentUser ? currentUser.last_name : ""}</span>
                </section>
                <SelectedUserNotes 
                setSelectedConnection={setSelectedConnection}
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