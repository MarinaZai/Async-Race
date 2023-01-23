import React, { useState, useEffect, MouseEvent, MouseEventHandler } from "react";
import { DOTS, usePagination } from "../../hooks/usePagination";
import styles from "./styles.module.css";

type PaginationPropsType = {
  buttonConst: number;
  contentPerPage: number;
  siblingCount: number;
  totalPageCount: number;
  curentPage: number;
  setCurrentPage: (page: number) => void;
};

const Pagination: React.FC<PaginationPropsType> = ({
  buttonConst,
  contentPerPage,
  siblingCount,
  totalPageCount,
  curentPage,
  setCurrentPage,
}) => {
  const paginationRange = usePagination({
    totalPageCount,
    dataLimit: contentPerPage,
    buttonConst,
    siblingCount,
    curentPage,
  });

  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }, [curentPage]);

  function goToNextPage() {
    if (curentPage + 1 <= totalPageCount) {
      setCurrentPage(curentPage + 1);
    }
  }
  function gotToPreviousPage() {
    if (curentPage - 1 >= 1) {
      setCurrentPage(curentPage - 1);
    }
  }
  function changePage(event: MouseEvent<HTMLButtonElement>) {
    const pageNumber = Number(event.currentTarget.textContent);
    setCurrentPage(pageNumber);
  }

  return (
    <div>
      <div className={styles.pagination}>
        <button
          onClick={gotToPreviousPage}
          className={`${styles.prev} ${
            curentPage === 1 ? styles.disabled : ""
          }`}
        >
          previous
        </button>
        {paginationRange?.map((item: string | number, index: number) => {
          if (item === DOTS) {
            return (
              <button key={index} className={styles.paginationItem}>
                &#8230;
              </button>
            );
          }
          return (
            <button
              key={index}
              onClick={changePage}
              className={`${styles.paginationItem} ${
                curentPage === item ? styles.active : null
              }`}
            >
              <span>{item}</span>
            </button>
          );
        })}
        <button
          onClick={goToNextPage}
          className={`${styles.next} ${
            curentPage === totalPageCount ? styles.disabled : ""
          }`}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
