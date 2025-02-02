import React, { ChangeEvent, Component } from 'react';
import styles from './Search.module.css';

interface SearchProps {
  searchQuery: string;
  onSearch: (search: string) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

class Search extends Component<SearchProps> {
  public render(): React.JSX.Element {
    const { searchQuery, onChange, onSearch } = this.props;

    return (
      <section className={styles['search-section']}>
        <input
          className={styles['search-input']}
          type="text"
          placeholder="Enter search query"
          value={searchQuery}
          onChange={onChange}
        />
        <button
          className={styles['search-button']}
          onClick={() => onSearch(searchQuery)}
        >
          Search
        </button>
      </section>
    );
  }
}

export default Search;
