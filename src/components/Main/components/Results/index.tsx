import { Result } from '@models/index';
import React, { Component } from 'react';
import styles from './Results.module.css';

interface ResultsProps {
  results: Result[];
}

class Results extends Component<ResultsProps> {
  public render(): React.JSX.Element {
    const { results } = this.props;
    return (
      <section className={styles['results-section']}>
        {results.map((result) => (
          <div key={result.id} className={styles['result-item']}>
            <img
              className={styles['item-image']}
              src={result.image}
              alt={result.name}
            />
            <h2 className={styles['item-title']}>{result.name}</h2>
            <p className={styles['item-info']}>{result.gender}</p>
            <p className={styles['item-info']}>{result.status}</p>
            <p className={styles['item-info']}>{result.location.name}</p>
          </div>
        ))}
      </section>
    );
  }
}

export default Results;
