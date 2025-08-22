import React from 'react';
import { Icon } from './Icon';

interface SearchBarProps {
  searchTerm: string;
  onSearchTermChange: (term: string) => void;
  onSearch: () => void;
  isSearching?: boolean;
  searchProgressText?: string | null;
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchTermChange, onSearch, isSearching = false, searchProgressText = null }) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div className="flex items-center gap-2">
      <div className="relative flex-grow">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <Icon name="search" className="w-5 h-5 text-gray-400" />
        </span>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchTermChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search diary entries..."
          className="w-full bg-gray-700 text-white placeholder-gray-400 border border-gray-600 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          disabled={isSearching}
        />
      </div>
      <button
        onClick={onSearch}
        disabled={isSearching}
        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-wait min-w-[120px]"
      >
        {isSearching ? (searchProgressText ?? 'Searching...') : 'Search'}
      </button>
    </div>
  );
};