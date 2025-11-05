import SelectedUserLabels from "./SelectedUserLabels";
import SelectedUserNotes from "./SelectedUserNotes";
import { type ISelectedConnection, type IUser } from "../../interfaces/Auth";

export default function SelectedUserInfo({
  selectedConnection,
  currentUser,
  setSelectedConnection,
}: {
  selectedConnection: ISelectedConnection | null | undefined;
  currentUser: IUser;
  setSelectedConnection: (e: ISelectedConnection) => void;
}) {
  return (
    <section>
      {selectedConnection ? (
        <div className="usersInfoContainer">
          <section className="flex items-center justify-between w-full">
            <span>
              {currentUser ? currentUser.first_name : ""}{" "}
              {currentUser ? currentUser.last_name : ""}
            </span>
          </section>
          <SelectedUserNotes
            setSelectedConnection={setSelectedConnection}
            selectedConnection={selectedConnection}
          />

          <SelectedUserLabels
            selectedConnection={selectedConnection}
            setSelectedConnection={setSelectedConnection}
          />
        </div>
      ) : (
        <div className="usersInfoContainer"></div>
      )}
    </section>
  );
}
