import React from "react";
import "./Pagination.css";

interface PaginationProps {
  page: number;
  count: number;
  size: number;
  movePage: (page: number) => void;
}

function Pagination(props: PaginationProps) {
  const firstDisabled = props.page === 1;
  const nextDisabled = props.page === Math.ceil(props.count / props.size);

  const showButton =
    props.page === 1
      ? [1, 2, 3]
      : props.page === Math.ceil(props.count / props.size)
      ? [props.page - 2, props.page - 1, props.page]
      : [props.page - 1, props.page, props.page + 1];

  return (
    <div className="pagination-div flex">
      <button
        className={`first-btn text-primary ${
          firstDisabled ? "bg-[#e6e6e6]" : ""
        }`}
        onClick={() => props.movePage(1)}
        disabled={firstDisabled}
      >
        First
      </button>
      {showButton.map((pageNum) => (
        <button
          key={pageNum}
          onClick={() => props.movePage(pageNum)}
          className={`page-btn ${
            pageNum === props.page
              ? "bg-primary text-white"
              : "bg-white text-primary"
          }`}
        >
          {pageNum}
        </button>
      ))}
      <button
        className={`next-btn text-primary ${
          nextDisabled ? "bg-[#e6e6e6]" : ""
        }`}
        onClick={() => props.movePage(props.page + 1)}
        disabled={nextDisabled}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
