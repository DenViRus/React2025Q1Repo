import { Results } from '@models/results.model';

const BASE_URL = 'https://rickandmortyapi.com/api/character/';

export const fetchResults = async (searchQuery: string): Promise<Results> => {
  const url = searchQuery ? `${BASE_URL}?name=${searchQuery}` : `${BASE_URL}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch results');
  }
  return response.json();
};
