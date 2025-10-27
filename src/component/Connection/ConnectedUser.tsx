import { PiCoffeeFill, PiCoffeeLight } from "react-icons/pi";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import { useContext } from "react";
import { type IUser, type ISelectedConnection } from "../../interfaces/Auth";
import { AuthSession } from "../../middleware/Context";
import { labels } from "../../static/labels";

export default function ConnectedUser({
  user,
  setSelectedConnection,
}: {
  user: IUser;
  setSelectedConnection: (e: ISelectedConnection) => void;
}) {
  const { users } = useContext(AuthSession);

  if (!users) {
    return <h1>{labels.loading}</h1>;
  }

  const findConnectedUser = users.find((user) => {
    return user.user_id === user.id;
  });

  return (
    <>
      {findConnectedUser ? (
        <div
          className="userCard"
          key={user.id}
          onClick={() => setSelectedConnection(user)}
        >
          <h4>
            {findConnectedUser.first_name} {findConnectedUser.last_name}
          </h4>
          <span>
            {user.had_coffee_chat ? <PiCoffeeFill /> : <PiCoffeeLight />}
          </span>
          <span>
            {user.bookmark_connection ? <IoBookmark /> : <IoBookmarkOutline />}
          </span>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
