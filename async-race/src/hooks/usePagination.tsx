import { useMemo } from "react";
export const DOTS = "...";
const range = (start: number, end: number) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, index) => index + start);
};

export const usePagination = (param: {
  totalPageCount: number,
  dataLimit: number,
  buttonConst: number,
  siblingCount: number,
  curentPage: number,
}) => {
  const paginationRange = useMemo(() => {
    // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumbers = param.buttonConst + 2 * param.siblingCount;

    /*
          If the number of pages is less than the page numbers we want to show in our
          paginationComponent, we return the range [1..totalPageCount]
        */
    if (totalPageNumbers >= param.totalPageCount) {
      return range(1, param.totalPageCount);
    }

    const leftSiblingIndex = Math.max(param.curentPage - param.siblingCount, 1);
    const rightSiblingIndex = Math.min(
      param.curentPage + param.siblingCount,
      param.totalPageCount
    );

    /*
          We do not want to show dots if there is only one position left 
          after/before the left/right page count as that would lead to a change if our Pagination
          component size which we do not want
        */
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex <= param.totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = param.totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * param.siblingCount;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, param.totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * param.siblingCount;
      let rightRange = range(
        param.totalPageCount - rightItemCount + 1,
        param.totalPageCount
      );

      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [param.totalPageCount, param.siblingCount, param.curentPage, param.buttonConst]);

  return paginationRange;
};
