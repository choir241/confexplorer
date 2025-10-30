import type { ISelectedConnection } from "../../interfaces/Auth";
import { FaPlus, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function SelectedUserNotes({
  selectedConnection,
}: {
  selectedConnection: ISelectedConnection;
}) {
  return (
    <section className="userNoteContainer">
      {selectedConnection.notes.map((note: string, i) => {
        return (
        <div className="userNote" key = {i}>
          <p key = {i}>{note}</p>
          <section className="noteIconContainer">
        <button className="button"><FaEdit/></button>
        <button className="button"><MdDelete/></button>
        </section>
        </div>
        );
      })}
      <button className="button" onClick={()=>{}}>Add Note</button>
    </section>
  );
}
