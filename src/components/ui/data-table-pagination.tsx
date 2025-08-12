import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePagination } from "@/hooks/use-pagination";

interface DataTablePaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
  pageSizeOptions?: number[];
  className?: string;
}

export function DataTablePagination({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  onPageSizeChange,
  pageSizeOptions = [10, 20, 50, 100],
  className,
}: DataTablePaginationProps) {
  const {
    totalPages,
    canGoNext,
    canGoPrevious,
    pageNumbers,
  } = usePagination({
    totalItems,
    itemsPerPage,
    currentPage,
  });

  if (totalPages <= 1) {
    return null;
  }

  const startItem = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className={className}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Left side - Info and page size */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
          <div className="text-sm text-muted-foreground">
            {totalItems === 0 ? (
              "No results found"
            ) : (
              <>
                Showing {startItem} to {endItem} of {totalItems} results
              </>
            )}
          </div>
          
          {onPageSizeChange && totalItems > 0 && (
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Show:</span>
              <Select
                value={itemsPerPage.toString()}
                onValueChange={(value) => onPageSizeChange(Number(value))}
              >
                <SelectTrigger className="h-8 w-20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {pageSizeOptions.map((size) => (
                    <SelectItem key={size} value={size.toString()}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
        </div>

        {/* Right side - Pagination controls */}
        <div className="flex justify-center sm:justify-end">
          <Pagination>
            <PaginationContent className="flex-wrap">
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => canGoPrevious && onPageChange(currentPage - 1)}
                  className={`${
                    !canGoPrevious 
                      ? "pointer-events-none opacity-50" 
                      : "cursor-pointer hover:bg-accent"
                  }`}
                />
              </PaginationItem>
              
              {pageNumbers.map((pageNumber, index) => (
                <PaginationItem key={index}>
                  {pageNumber === -1 ? (
                    <PaginationEllipsis />
                  ) : (
                    <PaginationLink
                      onClick={() => onPageChange(pageNumber)}
                      isActive={pageNumber === currentPage}
                      className="cursor-pointer hover:bg-accent"
                    >
                      {pageNumber}
                    </PaginationLink>
                  )}
                </PaginationItem>
              ))}
              
              <PaginationItem>
                <PaginationNext
                  onClick={() => canGoNext && onPageChange(currentPage + 1)}
                  className={`${
                    !canGoNext 
                      ? "pointer-events-none opacity-50" 
                      : "cursor-pointer hover:bg-accent"
                  }`}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
} 