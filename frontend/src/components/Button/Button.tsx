import React from "react";

interface ButtonProps {
  text: string;
  styling?: string;
}

function Button(props: ButtonProps) {
  return (
    <div className="btn-div">
      <button className={`${props.styling ? props.styling : ""}`}>
        {props.text}
      </button>
    </div>
  );
}

export default Button;
