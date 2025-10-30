import QRCode from "../QRCode";
import { type IUser } from "../../interfaces/Auth";
import { FaEdit } from "react-icons/fa";

export default function CurrentUserInfo({
  findCurrentUser,
}: {
  findCurrentUser: IUser;
}) {
  return (
    <section>
      <div className="fullNameContainer">
      <h1>
        {findCurrentUser.first_name} {findCurrentUser.last_name}
      </h1>
      <button className="button"><FaEdit/></button>
      </div>
      <h2>{findCurrentUser.curr_role} at {findCurrentUser.curr_company}</h2>

      <QRCode
        urlLink={findCurrentUser.linkedin_link}
        sizeX={"20px"}
        sizeY={"20px"}
      />
    </section>
  );
}
