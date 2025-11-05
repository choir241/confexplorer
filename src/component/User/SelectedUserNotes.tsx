import type { ISelectedConnection } from "../../interfaces/Auth";
import { FaEdit, FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import TextInput from "../TextInput";
import { useState, useContext } from "react";
import { AuthSession } from "../../middleware/Context";
import { labels } from "../../static/labels";
import { updateNotes } from "../../hooks/updateNotes";

export default function SelectedUserNotes({
  selectedConnection,
  setSelectedConnection,
}: {
  selectedConnection: ISelectedConnection;
  setSelectedConnection: (e: ISelectedConnection) => void;
}) {
  const [toggleEditNoteId, setToggleEditNoteId] = useState("");
  const [currentNoteValue, setCurrentNoteValue] = useState("");
  const [toggleCreateNoteForm, setToggleCreateNoteForm] = useState(false);

  const { users, loading, session } = useContext(AuthSession);

  if (!users || loading || !session) {
    return <h1>{labels.loading}</h1>;
  }

  async function editNote({
    noteId,
    noteContent,
  }: {
    noteId: string;
    noteContent: string;
  }) {
    await updateNotes({
      noteUpdater: (notes) =>
        notes.map((note) =>
          note.id === noteId ? { ...note, note: noteContent } : note,
        ),
      selectedConnection,
      users,
      session,
      setSelectedConnection,
    });

    setToggleEditNoteId("");
    setCurrentNoteValue("");
  }

  async function deleteNote({ noteId }: { noteId: string }) {
    await updateNotes({
      noteUpdater: (notes) => notes.filter((note) => note.id !== noteId),
      selectedConnection,
      users,
      session,
      setSelectedConnection,
    });
  }

  async function addNote({
    e,
    currentNoteValue,
  }: {
    currentNoteValue: string;
    e: React.MouseEvent<HTMLButtonElement>;
  }) {
    e.preventDefault();
    try {
      if (!currentNoteValue) {
        throw new Error("No value input detected, please try again");
      }

      const newNoteId = Number(selectedConnection.notes.at(-1)?.id || 0) + 1;

      await updateNotes({
        noteUpdater: (notes) => [
          ...notes,
          { id: newNoteId.toString(), note: currentNoteValue },
        ],
        selectedConnection,
        users,
        session,
        setSelectedConnection,
      });

      setToggleCreateNoteForm(false);
      setCurrentNoteValue("");
    } catch (err) {
      console.error(err);
      throw new Error(`There was an error adding a note - ${err}`);
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
                <button
                  className="button"
                  onClick={() => deleteNote({ noteId: note.id })}
                >
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
              <button
                className="button"
                onClick={() =>
                  editNote({
                    noteId: note.id,
                    noteContent: currentNoteValue
                      ? currentNoteValue
                      : note.note,
                  })
                }
              >
                {labels.user.updateNoteButton}
              </button>
            </div>
          );
        }
      })}

      {toggleCreateNoteForm ? (
        <form>
          <TextInput
            className="mt-1"
            currentValue={""}
            handleOnValueChange={setCurrentNoteValue}
          />
          <section>
            <button
              className="button mr-1"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                addNote({ e, currentNoteValue })
              }
            >
              {labels.user.addNoteButton}
            </button>
            <button
              className="button"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                setToggleCreateNoteForm(false);
              }}
            >
              {labels.user.cancelButton}
            </button>
          </section>
        </form>
      ) : (
        <button
          className="button"
          onClick={() => setToggleCreateNoteForm(true)}
        >
          <FaPlus />
        </button>
      )}
    </section>
  );
}
