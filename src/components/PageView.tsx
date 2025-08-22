import React from 'react';
import type { DiaryPage } from '../types';

interface PageViewProps {
  page: DiaryPage | null;
}

export const PageView: React.FC<PageViewProps> = ({ page }) => {
  if (!page) {
    return (
      <div className="flex-grow flex items-center justify-center text-gray-500">
        <p>Loading diary page...</p>
      </div>
    );
  }

  // Converts markdown-like text to HTML elements.
  const renderMarkdown = (text: string) => {
    // Split text into paragraphs based on one or more consecutive newlines.
    // This correctly treats blocks of text separated by blank lines as single paragraphs.
    const paragraphs = text.split(/\n\s*\n/);

    return paragraphs
      .filter(p => p.trim() !== '') // Filter out any empty strings that result from multiple blank lines.
      .map((paragraph, index) => {
        // Check if the paragraph is a heading.
        // We only check the first line of a potential multi-line block for the heading marker.
        const firstLine = paragraph.split('\n')[0];
        if (firstLine.startsWith('# ')) {
          return <h1 key={index} className="text-2xl font-bold text-yellow-100/80 mb-4 pb-2 border-b border-gray-600">{firstLine.substring(2)}</h1>;
        }

        // For regular paragraphs, replace any internal newlines with a space.
        // This ensures that lines that were contiguous in the source file flow together as a single paragraph.
        const processedParagraph = paragraph.replace(/\n/g, ' ').trim();
        return <p key={index} className="mb-4">{processedParagraph}</p>;
      });
  };


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
      {/* Image Panel */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex items-center justify-center">
        <img
          src={page.imageUrl}
          alt={`Diary page ${page.id}`}
          className="max-w-full max-h-full object-contain rounded-md"
          style={{ maxHeight: 'calc(100vh - 200px)'}}
        />
      </div>

      {/* Markdown Panel */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)'}}>
        <div className="prose prose-invert prose-sm max-w-none font-serif text-gray-300 leading-relaxed">
            {page.markdownContent === null ? (
              <p className="text-gray-400">Loading text...</p>
            ) : (
              renderMarkdown(page.markdownContent)
            )}
        </div>
      </div>
    </div>
  );
};
