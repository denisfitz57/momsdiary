
import React from 'react';
import { Icon } from './Icon';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onNext: () => void;
  onPrev: () => void;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onNext, onPrev }) => {
  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === totalPages - 1;

  const buttonBaseClasses =
    'flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md border border-gray-700 transition-colors duration-200';
  const buttonHoverClasses = 'hover:bg-gray-700';
  const buttonDisabledClasses = 'opacity-50 cursor-not-allowed';

  return (
    <div className="flex items-center justify-between mt-4">
      <button
        onClick={onPrev}
        disabled={isFirstPage}
        className={`${buttonBaseClasses} ${isFirstPage ? buttonDisabledClasses : buttonHoverClasses}`}
      >
        <Icon name="arrow-left" className="w-4 h-4" />
        Previous
      </button>
      <span className="text-gray-400">
        Page {currentPage + 1} of {totalPages}
      </span>
      <button
        onClick={onNext}
        disabled={isLastPage}
        className={`${buttonBaseClasses} ${isLastPage ? buttonDisabledClasses : buttonHoverClasses}`}
      >
        Next
        <Icon name="arrow-right" className="w-4 h-4" />
      </button>
    </div>
  );
};