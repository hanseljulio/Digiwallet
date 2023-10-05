import React from "react";
import PaginationButton from "../PaginationButtons/PaginationButton";

interface PaginationProps {
  noOfItems: number;
  moveForward?: () => void;
  moveBackward?: () => void;
  movePage?: () => void;
}

function Pagination(props: PaginationProps) {
  console.log(props.noOfItems);

  return (
    <div className="pagination-div">
      <ul className="flex">
        <PaginationButton page="First" customClass="rounded-l-lg" />
        <PaginationButton page="1" />
        <PaginationButton page="2" onClick={props.movePage} />
        <PaginationButton page="Next" customClass="rounded-r-lg" />
      </ul>
    </div>
  );
}

export default Pagination;
