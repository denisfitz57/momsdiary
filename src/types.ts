
export interface DiaryPage {
  id: number;
  year: string;
  imageUrl: string;
  markdownContent: string | null;
}

export interface SearchResult {
  pageIndex: number;
  snippet: string;
}