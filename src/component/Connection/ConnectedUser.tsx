import { PiCoffeeFill, PiCoffeeLight } from "react-icons/pi";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import { useContext } from "react";
import { type IUser, type ISelectedConnection } from "../../interfaces/Auth";
import { AuthSession } from "../../middleware/Context";
import { labels } from "../../static/labels";

export default function ConnectedUser({
  connectedUser,
  setSelectedConnection,
}: {
  connectedUser: IUser;
  setSelectedConnection: (e: ISelectedConnection) => void;
}) {
  const { users } = useContext(AuthSession);

  if (!users) {
    return <h1>{labels.loading}</h1>;
  }

  const findConnectedUser = users.find((user) => {
    return user.user_id === connectedUser.id;
  });

  return (
    <div>
      {findConnectedUser ? (
        <div
          className="userCard"
          onClick={() => setSelectedConnection(connectedUser)}
        >
          <h4>
            {findConnectedUser.first_name} {findConnectedUser.last_name}
          </h4>
          <div className="iconContainer">
            <span className="coffeeIcon">
              {connectedUser.had_coffee_chat ? (
                <PiCoffeeFill />
              ) : (
                <PiCoffeeLight />
              )}
            </span>
            <span>
              {connectedUser.bookmark_connection ? (
                <IoBookmark />
              ) : (
                <IoBookmarkOutline />
              )}
            </span>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
