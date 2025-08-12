import { useMemo } from 'react';

interface UsePaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
}

interface UsePaginationReturn {
  totalPages: number;
  startIndex: number;
  endIndex: number;
  canGoNext: boolean;
  canGoPrevious: boolean;
  pageNumbers: number[];
}

export function usePagination({
  totalItems,
  itemsPerPage,
  currentPage,
}: UsePaginationProps): UsePaginationReturn {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  const canGoNext = currentPage < totalPages;
  const canGoPrevious = currentPage > 1;

  const pageNumbers = useMemo(() => {
    const pages: number[] = [];
    
    if (totalPages <= 1) {
      return pages;
    }
    
    if (totalPages <= 7) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show smart pagination with ellipsis
      if (currentPage <= 4) {
        // Near start: show 1, 2, 3, 4, ..., last
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push(-1); // Ellipsis marker
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        // Near end: show 1, ..., last-3, last-2, last-1, last
        pages.push(1);
        pages.push(-1); // Ellipsis marker
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Middle: show 1, ..., current-1, current, current+1, ..., last
        pages.push(1);
        pages.push(-1); // Ellipsis marker
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push(-1); // Ellipsis marker
        pages.push(totalPages);
      }
    }
    
    return pages;
  }, [currentPage, totalPages]);

  return {
    totalPages,
    startIndex,
    endIndex,
    canGoNext,
    canGoPrevious,
    pageNumbers,
  };
} 