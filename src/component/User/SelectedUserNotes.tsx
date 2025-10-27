import type { ISelectedConnection } from "../../interfaces/Auth";

export default function SelectedUserNotes({
  selectedConnection,
}: {
  selectedConnection: ISelectedConnection;
}) {
  return (
    <ul>
      {selectedConnection.notes.map((note: string) => {
        return <li>{note}</li>;
      })}
    </ul>
  );
}
