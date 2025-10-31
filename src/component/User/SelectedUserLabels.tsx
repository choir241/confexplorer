import { type ISelectedConnection } from "../../interfaces/Auth";
import { labels } from "../../static/labels";

export default function SelectedUserLabels({
  selectedConnection,
}: {
  selectedConnection: ISelectedConnection;
}) {
  return (
    <div className="labelContainer">
      <div className="labels">
        {selectedConnection.labels.map((label) => {
          return <span className="label" key = {label.id}>{label.label}</span>;
        })} 
      </div>
      <button className="button">{labels.user.selectedUserLabelsButton}</button>
    </div>
  );
}
