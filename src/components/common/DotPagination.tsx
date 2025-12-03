import { usePagination, PaginationItemType } from "@heroui/react";
import { cn } from "@heroui/react";

interface DotPaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
    className?: string;
}

export default function DotPagination({ 
    totalPages, 
    currentPage, 
    onPageChange,
    className = ""
}: DotPaginationProps) {
    const { activePage, range } = usePagination({
        total: totalPages,
        page: currentPage,
        onChange: onPageChange,
        showControls: false,
        siblings: 1,
        boundaries: 1,
    });

    if (totalPages <= 1) return null;

    return (
        <div className={cn("flex justify-center mb-12", className)}>
            <ul className="flex gap-3 items-center">
                {range.map((page) => {
                    if (page === PaginationItemType.DOTS) {
                        return (
                            <li key={page} className="flex items-center justify-center">
                                <span className="text-gray-400 text-xs">...</span>
                            </li>
                        );
                    }

                    return (
                        <li key={page} aria-label={`page ${page}`} className="w-2 h-2">
                            <button
                                className={cn(
                                    "w-full h-full rounded-full transition-all duration-300",
                                    activePage === page 
                                        ? "bg-purple-500 scale-125" 
                                        : "bg-gray-600 hover:bg-gray-400"
                                )}
                                onClick={() => typeof page === 'number' && onPageChange(page)}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
