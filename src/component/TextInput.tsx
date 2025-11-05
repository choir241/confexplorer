export default function TextInput({
  currentValue,
  handleOnValueChange,
  className,
}: {
  className?: string;
  currentValue: string;
  handleOnValueChange: (e: string) => void;
}) {
  return (
    <textarea
      className={className}
      onChange={(e) => handleOnValueChange(e.target.value)}
      placeholder={currentValue}
      defaultValue={currentValue}
    ></textarea>
  );
}
