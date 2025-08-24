import React, { useState, useEffect } from 'react';
import type { DiaryPage, SearchResult } from './types';
import { SearchBar } from './components/SearchBar';
import { PageView } from './components/PageView';
import { Pagination } from './components/Pagination';
import { SearchResults } from './components/SearchResults';
import { R2_PUBLIC_URL, DIARY_ENTRIES } from './data/diaryData';
import { DIARY_CONTENT } from './data/diaryContent';

const App: React.FC = () => {
  const [diaryPages, setDiaryPages] = useState<DiaryPage[]>([]);
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeSearchTerm, setActiveSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (!R2_PUBLIC_URL || R2_PUBLIC_URL.includes('your-public-bucket-url')) {
      setError('Configuration needed: Please update the R2_PUBLIC_URL in `data/diaryData.ts` with your public Cloudflare R2 bucket URL.');
      setIsLoading(false);
      return;
    }
    
    if (DIARY_ENTRIES.length === 0) {
      setError('Configuration needed: Please add your diary entry filenames to the `DIARY_ENTRIES` array in `data/diaryData.ts`.');
      setIsLoading(false);
      return;
    }

    // Immediately create all pages with content from the local bundle
    const allPages: DiaryPage[] = DIARY_ENTRIES.map((baseName, index) => ({
      id: index + 1,
      year: baseName.split('_')[0],
      imageUrl: `${R2_PUBLIC_URL}/${baseName}.jpg`,
      markdownContent: DIARY_CONTENT[baseName] ?? `*Content for ${baseName} is not in the local bundle. Please run the content generation script.*`,
    }));

    setDiaryPages(allPages);
    setIsLoading(false);
  }, []);

  const handleNextPage = () => {
    setCurrentPageIndex((prevIndex) => Math.min(prevIndex + 1, diaryPages.length - 1));
  };

  const handlePrevPage = () => {
    setCurrentPageIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };
  
  const handleJumpToPage = (pageIndex: number) => {
    if (pageIndex >= 0 && pageIndex < diaryPages.length) {
      setCurrentPageIndex(pageIndex);
       window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      clearSearch();
      return;
    }
    
    setIsSearching(true);
    
    const lowercasedTerm = searchTerm.toLowerCase();
    const results: SearchResult[] = [];

    diaryPages.forEach((page, index) => {
      const content = page.markdownContent?.toLowerCase();
      if (content && content.includes(lowercasedTerm)) {
        const firstIndex = content.indexOf(lowercasedTerm);
        // Create a snippet around the search term
        const start = Math.max(0, firstIndex - 50);
        const end = Math.min(content.length, firstIndex + lowercasedTerm.length + 50);
        const snippet = page.markdownContent!.substring(start, end);
        
        results.push({
          pageIndex: index,
          snippet: snippet,
        });
      }
    });

    setSearchResults(results);
    setActiveSearchTerm(searchTerm);
    setIsSearching(false);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setActiveSearchTerm('');
    setSearchResults([]);
  };

  const currentPageData: DiaryPage | null = diaryPages[currentPageIndex] || null;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center p-4 sm:p-6">
      <header className="w-full max-w-7xl mb-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-4 bg-gray-800/50 border border-gray-700 rounded-lg">
            <div className="flex items-center gap-4">
                 <h1 className="text-2xl font-bold text-white tracking-wider">
                    Digital Diary Viewer
                 </h1>
            </div>
          <div className="w-full sm:w-auto sm:min-w-[300px]">
            <SearchBar 
              searchTerm={searchTerm}
              onSearchTermChange={setSearchTerm}
              onSearch={handleSearch}
              isSearching={isSearching}
            />
          </div>
        </div>
         {error && (
            <div className="w-full max-w-7xl mt-4 p-3 bg-red-800/50 border border-red-700 text-red-200 rounded-lg text-center">
                {error}
            </div>
        )}
      </header>

      {searchResults.length > 0 && (
         <SearchResults
          results={searchResults}
          searchTerm={activeSearchTerm}
          onResultClick={handleJumpToPage}
          onClear={clearSearch}
        />
      )}

      <main className="w-full max-w-7xl flex-grow flex flex-col mt-4">
        {isLoading ? (
            <div className="flex-grow flex flex-col items-center justify-center text-gray-500 bg-gray-800 rounded-lg p-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-300">Initializing Diary...</h2>
            </div>
        ) : diaryPages.length > 0 && currentPageData ? (
          <>
            <PageView page={currentPageData} />
            <Pagination
              currentPage={currentPageIndex}
              totalPages={diaryPages.length}
              onNext={handleNextPage}
              onPrev={handlePrevPage}
            />
          </>
        ) : (
          <div className="flex-grow flex flex-col items-center justify-center text-gray-500 bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-300">Welcome to your Digital Diary</h2>
            <p className="text-center max-w-md">
              { !error && 'Could not load diary entries. Please ensure your configuration in `data/diaryData.ts` is correct.' }
            </p>
             {error && (
                <p className="text-center max-w-lg mt-4 text-red-300 bg-red-900/50 p-3 rounded-md">
                    {error}
                </p>
            )}
          </div>
        )}
      </main>

      <footer className="w-full max-w-7xl mt-6 text-center text-xs text-gray-500">
        <p>A simple interface for exploring scanned documents.</p>
      </footer>
    </div>
  );
};

export default App;
