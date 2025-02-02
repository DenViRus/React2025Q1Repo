import { Result } from './result.model';

export interface Results {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Result[];
}
