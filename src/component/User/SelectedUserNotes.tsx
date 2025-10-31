import type { ISelectedConnection } from "../../interfaces/Auth";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { supabase } from "../../static/supabaseClient";
import TextInput from "../TextInput";
import { useState, useContext } from "react";
import { AuthSession } from "../../middleware/Context";
import { labels } from "../../static/labels";

export default function SelectedUserNotes({
  selectedConnection,
}: {
  selectedConnection: ISelectedConnection;
}) {
  const [toggleEditNoteId, setToggleEditNoteId] = useState("");
  const [currentNoteValue, setCurrentNoteValue] = useState("");

  const {users, loading, session} = useContext(AuthSession);

  if (!users || loading || !session) {
      return <h1>{labels.loading}</h1>;
  }

  async function addNote({ noteId, noteContent }: { noteId: string, noteContent: string }) {
    setToggleEditNoteId("");
    const updatedNotes = selectedConnection.notes.map((note)=>{
      if(note.id === noteId){
        return {...note, note: note.note = noteContent}
      }else{
        return note
      }
    })

    const findSelectedConnection = users?.find((user)=>user.user_id === session?.user.id)!;

    const updateConnectedUsers = findSelectedConnection.connected_users.map((user: ISelectedConnection)=>{
      if(user.id === selectedConnection.id){
        return {...user, notes: updatedNotes} 
      }else{
        return user
      }
    });

    const { error } = await supabase
      .from("Users")
      .upsert({ ...findSelectedConnection, id: findSelectedConnection.id, connected_users: updateConnectedUsers });

      if(error){
        throw new Error(`${error}`);
      }
  }

  return (
    <section className="userNoteContainer">
      {selectedConnection.notes.map((note) => {
        if (toggleEditNoteId !== note.id && note) {
          return (
            <div className="userNote" key={note.id}>
              <p>{note.note}</p>
              <section className="noteIconContainer">
                <button
                  className="button"
                  onClick={() => setToggleEditNoteId(note.id)}
                >
                  <FaEdit />
                </button>
                <button className="button">
                  <MdDelete />
                </button>
              </section>
            </div>
          );
        } else if (note) {
          return (
            <div className="userNote" key={note.id}>
              <TextInput
                currentValue={note.note}
                handleOnValueChange={setCurrentNoteValue}
              />
              <button className="button" onClick={()=>addNote({noteId: note.id, noteContent: currentNoteValue ? currentNoteValue : note.note})}>Update</button>
            </div>
          );
        }
      })}
      <button className="button" onClick={() => {}}>
        Add Note
      </button>
    </section>
  );
}
