import React from "react";
import "./Input.css";

interface InputProps {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
  width?: string;
  spacing?: string;
  onChange?: any;
}

function Input(props: InputProps) {
  return (
    <div className="input-div">
      <div
        className={`flex-col input-div-wrapper ${
          props.spacing ? props.spacing : ""
        }`}
      >
        <p className="pb-[16px] text-lg font-bold text-[#252B42]">
          {props.label}
        </p>
        <input
          className={`input-area ${props.width ? props.width : ""}`}
          type={props.type}
          name={props.name}
          placeholder={props.placeholder ? props.placeholder : ""}
        />
      </div>
    </div>
  );
}

export default Input;
