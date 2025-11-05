import { type ISelectedConnection } from "../../interfaces/Auth";
import { FaPlus } from "react-icons/fa6";
import SelectUserForm from "./SelectUserForm";
import { useState, useContext } from "react";
import { labels } from "../../static/labels";
import { updateLabels } from "../../hooks/updateLabels";
import { AuthSession } from "../../middleware/Context";
import { type ILabel } from "../../interfaces/Auth";
import { FaTrashCan } from "react-icons/fa6";

export default function SelectedUserLabels({
  selectedConnection,
  setSelectedConnection,
}: {
  selectedConnection: ISelectedConnection;
  setSelectedConnection: (e: ISelectedConnection) => void;
}) {
  const [toggleSelectUserForm, setToggleSelectUserForm] = useState(false);
  const [currentLabelValue, setCurrentLabelValue] = useState("");

  const { users, loading, session } = useContext(AuthSession);

  if (!users || loading || !session) {
    return <h1>{labels.loading}</h1>;
  }

  async function confirmDeleteLabel({
    label,
    labelId,
  }: {
    label: string;
    labelId: number;
  }) {
    if (confirm(`${labels.user.deleteLabelConfirm} ${label}`)) {
      await updateLabels({
        labelUpdater: (labels) =>
          labels.filter((label) => label.id !== labelId),
        selectedConnection,
        users,
        session,
        setSelectedConnection,
      });
    }
  }

  async function addLabel() {
    const newLabelId =
      Number(
        selectedConnection.labels[selectedConnection.labels.length - 1].id
      ) + 1;

    updateLabels({
      labelUpdater: () => [
        ...selectedConnection.labels,
        { id: newLabelId, label: currentLabelValue },
      ],
      selectedConnection,
      users,
      session,
      setSelectedConnection,
    });
  }

  return (
    <div className="labelContainer">
      <div className="labels">
        {selectedConnection.labels.map((label: ILabel) => {
          return (
            <div className="label flex items-center" key={label.id}>
              {label.label}
              <button
                className="button"
                onClick={() => confirmDeleteLabel({ label: label.label, labelId: label.id })}
              >
                <FaTrashCan />
              </button>
            </div>
          );
        })}
      </div>
      <section className="flex justify-between items-start flex-col">
        {toggleSelectUserForm ? (
          <SelectUserForm setCurrentLabelValue={setCurrentLabelValue} />
        ) : (
          ""
        )}
        {toggleSelectUserForm ? (
          <section className="flex items-center">
            <button className="button mr-1" onClick={() => addLabel()}>
              {labels.user.addLabelButton}
            </button>
            <button
              className="button"
              onClick={() => setToggleSelectUserForm(false)}
            >
              {labels.user.cancelButton}
            </button>
          </section>
        ) : (
          <button
            className="button mr-1"
            onClick={() => setToggleSelectUserForm(true)}
          >
            <FaPlus />
          </button>
        )}
      </section>
    </div>
  );
}
