interface DropdownProps {
  label: string;
  spacing: string;
}

function Dropdown(props: DropdownProps) {
  return (
    <div className={`dropdown-div ${props.spacing ? props.spacing : ""}`}>
      <p className="pb-[16px] text-lg font-bold text-[#252B42]">
        {props.label}
      </p>
      <select
        className="p-4 bg-[#F1F1F1] w-full rounded"
        name="category-dropdown"
      >
        <option value="Bank Transfer">Bank Transfer</option>
        <option value="Visa Card">Visa Card</option>
        <option value="Cash">Cash</option>
      </select>
    </div>
  );
}

export default Dropdown;
