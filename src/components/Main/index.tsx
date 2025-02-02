import { Result } from '@models/index';
import React, { Component } from 'react';
import { ErrorButton, Results } from './components';
import styles from './Main.module.css';

interface MainProps {
  results: Result[];
  loading: boolean;
  error: unknown | null;
}

class Main extends Component<MainProps> {
  public render(): React.JSX.Element {
    const { results, loading, error } = this.props;
    return (
      <main className={styles['main']}>
        {!!error && (
          <div className={styles['error-block']}>Error: {String(error)}</div>
        )}
        {loading && <div className={styles['loading-block']}>Loading...</div>}
        {!error && !loading && <Results results={results} />}
        <ErrorButton hasError={!!error} />
      </main>
    );
  }
}

export default Main;
