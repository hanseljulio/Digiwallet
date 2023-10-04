interface DropdownProps {
  label: string;
  spacing?: string;
  labelStyle: string;
  options: string[];
}

function Dropdown(props: DropdownProps) {
  return (
    <div className={`dropdown-div ${props.spacing ? props.spacing : ""}`}>
      <p className={props.labelStyle}>{props.label}</p>
      <select
        className="p-4 bg-[#F1F1F1] w-full rounded"
        name="category-dropdown"
      >
        {props.options.map((option, index) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
