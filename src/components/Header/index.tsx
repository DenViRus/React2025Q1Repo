import React, { ChangeEvent, Component } from 'react';
import { Search } from './components';
import styles from './Header.module.css';

interface SearchProps {
  searchQuery: string;
  onSearch: (search: string) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

class Header extends Component<SearchProps> {
  public render(): React.JSX.Element {
    const { searchQuery, onChange, onSearch } = this.props;
    return (
      <header className={styles['header']}>
        <Search
          searchQuery={searchQuery}
          onSearch={onSearch}
          onChange={onChange}
        />
      </header>
    );
  }
}

export default Header;
