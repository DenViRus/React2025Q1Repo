export const getSearchQuery = (): string => {
  return localStorage.getItem('searchQuery') || '';
};

export const setSearchQuery = (searchQuery: string): void => {
  localStorage.setItem('searchQuery', searchQuery);
};

export const removeSearchQuery = (): void => {
  localStorage.removeItem('searchQuery');
};
