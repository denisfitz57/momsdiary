
import React from 'react';
import type { SearchResult } from '../types';

interface SearchResultsProps {
  results: SearchResult[];
  searchTerm: string;
  onResultClick: (pageIndex: number) => void;
  onClear: () => void;
}

const HighlightedText: React.FC<{ text: string; highlight: string }> = ({ text, highlight }) => {
  if (!highlight.trim()) {
    return <span>{text}</span>;
  }
  const regex = new RegExp(`(${highlight})`, 'gi');
  const parts = text.split(regex);

  return (
    <span>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <span key={i} className="bg-yellow-500 text-black px-1 rounded">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  );
};


export const SearchResults: React.FC<SearchResultsProps> = ({ results, searchTerm, onResultClick, onClear }) => {
  if (results.length === 0) {
    return null;
  }

  return (
    <div className="w-full max-w-7xl mx-auto mt-6 bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-white">Search Results <span className="text-gray-400 font-normal text-base">({results.length} found)</span></h2>
        <button 
          onClick={onClear} 
          className="text-sm text-indigo-400 hover:text-indigo-300"
        >
          Clear Results
        </button>
      </div>
      <ul className="space-y-3 max-h-64 overflow-y-auto pr-2">
        {results.map((result, index) => (
          <li
            key={index}
            onClick={() => onResultClick(result.pageIndex)}
            className="p-3 bg-gray-700/50 hover:bg-gray-700 rounded-md cursor-pointer transition-colors duration-200"
          >
            <div className="font-semibold text-indigo-400 mb-1">Page {result.pageIndex + 1}</div>
            <p className="text-sm text-gray-300 italic">
              ...<HighlightedText text={result.snippet} highlight={searchTerm} />...
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};