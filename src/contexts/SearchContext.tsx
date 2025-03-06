
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { deals } from '../data/deals';

type SearchContextType = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchResults: any[];
  performSearch: (query: string) => void;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const performSearch = (query: string) => {
    const lowerCaseQuery = query.toLowerCase();
    
    if (!lowerCaseQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const results = deals.filter(
      deal => 
        deal.title.toLowerCase().includes(lowerCaseQuery) ||
        deal.brand.toLowerCase().includes(lowerCaseQuery) ||
        deal.category.toLowerCase().includes(lowerCaseQuery) ||
        deal.code.toLowerCase().includes(lowerCaseQuery)
    );
    
    setSearchResults(results);
  };

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery, searchResults, performSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};
