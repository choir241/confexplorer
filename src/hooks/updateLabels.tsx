import type { ISelectedConnection, IUser, ILabel } from "../interfaces/Auth";
import { type Session } from "@supabase/supabase-js";
import { supabase } from "../static/supabaseClient";

export async function updateLabels({
  labelUpdater,
  selectedConnection,
  users,
  session,
  setSelectedConnection,
}: {
  labelUpdater: (label: ILabel[]) => ILabel[];
  selectedConnection: ISelectedConnection;
  users: IUser[] | null;
  session: Session | null;
  setSelectedConnection: (e: ISelectedConnection) => void;
}) {
  const updatedLabels = labelUpdater(selectedConnection.labels);

  const findSelectedConnection = users?.find(
    (user) => user.user_id === session?.user.id,
  )!;

  const updateConnectedUsers = findSelectedConnection.connected_users.map(
    (user: ISelectedConnection) =>
      user.id === selectedConnection.id
        ? { ...user, labels: updatedLabels }
        : user,
  );

  const updatedSelectedConnectionState = updateConnectedUsers.find(
    (user) => user.id === selectedConnection.id,
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
}
