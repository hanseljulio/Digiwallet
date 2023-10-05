import React from "react";
import "./PaginationButton.css";

interface PaginationButtonProps {
  page: string;
  customClass?: string;
  onClick?: (page: number) => void;
}

function PaginationButton(props: PaginationButtonProps) {
  return (
    <li
      className={`pg-btn ${props.customClass ? props.customClass : ""}`}
      onClick={() => props.onClick}
    >
      {props.page}
    </li>
  );
}

export default PaginationButton;
