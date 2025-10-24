import { PiCoffeeFill, PiCoffeeLight } from "react-icons/pi";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import { useContext } from "react";
import { type IUser } from "../pages/User/User";
import { AuthSession } from "../middleware/Context";
import { label } from "../static/label";

export default function ConnectedUser({
  user,
  setSelectedConnection,
}: {
  user: IUser;
  setSelectedConnection: (e:string) => void
}) {
  const { connections } = useContext(AuthSession);

  if (!connections) {
    return <h1>{label.loading}</h1>;
  }

  const findUser = connections.find((connection) => {
    return connection.user_id === user.id;
  });

  return (
    <>
      {findUser ? (
        <div
          className="userCard"
          key={user.id}
          onClick={() => setSelectedConnection(user.id)}
        >
          <h4>
            {findUser.first_name} {findUser.last_name}
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
