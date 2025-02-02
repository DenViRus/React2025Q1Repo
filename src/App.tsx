import './App.css';
import { Result, Results } from '@models/index';
import { fetchResults, getSearchQuery, setSearchQuery } from '@services/index';
import React, { ChangeEvent, Component } from 'react';
import { ErrorBoundary, Header, Main } from './components';

interface AppState {
  searchQuery: string;
  results: Result[];
  loading: boolean;
  error: null | Error;
}

class App extends Component<unknown, AppState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      searchQuery: '',
      results: [],
      loading: false,
      error: null,
    };
  }

  public componentDidMount(): void {
    const searchQuery = getSearchQuery();
    this.setState({ searchQuery }, () => this.getResults(searchQuery));
  }

  private getResults = async (searchQuery: string = ''): Promise<void> => {
    try {
      this.setState({ loading: true });
      const fetchData: Results = await fetchResults(searchQuery);

      setTimeout(() => {
        this.setState({ results: fetchData.results, loading: false });
      }, 1000);
      setSearchQuery(searchQuery);
    } catch (error) {
      this.setState({ error: error as Error, loading: false });
    }
  };

  private handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    this.setState({ searchQuery: event.target.value });
  };

  private handleSearch = (): void => {
    const { searchQuery } = this.state;
    this.getResults(searchQuery);
  };

  public render(): React.JSX.Element {
    const { searchQuery, results, loading, error } = this.state;

    return (
      <ErrorBoundary>
        <Header
          searchQuery={searchQuery}
          onChange={this.handleChange}
          onSearch={this.handleSearch}
        />
        <Main results={results} loading={loading} error={error} />
      </ErrorBoundary>
    );
  }
}

export default App;
