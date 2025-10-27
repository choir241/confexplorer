import QRCode from "../QRCode";
import { type IUser } from "../../interfaces/Auth";

export default function CurrentUserInfo({
  findCurrentUser,
}: {
  findCurrentUser: IUser;
}) {
  return (
    <section>
      <h1>
        {findCurrentUser.first_name} {findCurrentUser.last_name}
      </h1>
      <h2>{findCurrentUser.curr_company}</h2>
      <h3>{findCurrentUser.curr_role}</h3>

      <QRCode
        urlLink={findCurrentUser.linkedin_link}
        sizeX={"250"}
        sizeY={"250"}
      />
    </section>
  );
}
