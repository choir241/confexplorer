import { userLabels } from "../../static/userLabels";

export default function SelectUserForm({
  setCurrentLabelValue,
}: {
  setCurrentLabelValue: (e: string) => void;
}) {
  return (
    <form className="mb-half">
      <select onChange={(e) => setCurrentLabelValue(e.target.value)}>
        {userLabels.map((label: string) => {
          return <option key={label}>{label}</option>;
        })}
      </select>
    </form>
  );
}
