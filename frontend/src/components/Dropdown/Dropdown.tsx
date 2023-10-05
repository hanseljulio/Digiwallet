interface DropdownProps {
  label: string;
  spacing?: string;
  labelStyle: string;
  options: string[];
  value?: string;
  onChange?: (e: any) => void;
}

function Dropdown(props: DropdownProps) {
  return (
    <div className={`dropdown-div ${props.spacing ? props.spacing : ""}`}>
      <p className={props.labelStyle}>{props.label}</p>
      <select
        className="p-4 bg-[#F1F1F1] w-full rounded"
        name="category-dropdown"
        onChange={props.onChange}
      >
        {props.options.map((option, index) => (
          <option value={props.value ? index + 1 : option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
