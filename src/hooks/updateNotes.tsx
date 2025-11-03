import type { INote } from "../interfaces/Note";
import type {
  ISelectedConnection,
  IUser,
} from "../interfaces/Auth";
import { supabase } from "../static/supabaseClient";
import { type Session } from "@supabase/supabase-js";

export async function updateNotes({
  noteUpdater,
  selectedConnection,
  users,
  session,
  setSelectedConnection,
}: {
  noteUpdater: (notes: INote[]) => INote[];
  selectedConnection: ISelectedConnection;
  users: IUser[] | null;
  session: Session | null;
  setSelectedConnection: (e: ISelectedConnection) => void;
}) {
  const updatedNotes = noteUpdater(selectedConnection.notes);

  const findSelectedConnection = users?.find(
    (user) => user.user_id === session?.user.id
  )!;

  const updateConnectedUsers = findSelectedConnection.connected_users.map(
    (user: ISelectedConnection) =>
      user.id === selectedConnection.id
        ? { ...user, notes: updatedNotes }
        : user
  );

  const updatedSelectedConnectionState = updateConnectedUsers.find(
    (user: ISelectedConnection) => user.id === selectedConnection.id
  )!;

  setSelectedConnection(updatedSelectedConnectionState);

  const { error } = await supabase.from("Users").upsert({
    ...findSelectedConnection,
    id: findSelectedConnection.id,
    connected_users: updateConnectedUsers,
  });

  if (error) {
    throw new Error(`${error}`);
  }

  return updatedNotes;
}
