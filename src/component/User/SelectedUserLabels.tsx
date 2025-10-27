import { type ISelectedConnection } from "../../interfaces/Auth";
import { labels } from "../../static/labels";

export default function SelectedUserLabels({
  selectedConnection,
}: {
  selectedConnection: ISelectedConnection;
}) {
  return (
    <div>
      <div className="labels">
        {selectedConnection.labels.map((label) => {
          return <span className="label">{label}</span>;
        })}
      </div>
      <button>{labels.user.selectedUserLabelsButton}</button>
    </div>
  );
}
