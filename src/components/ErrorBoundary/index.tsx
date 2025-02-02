import React, { Component, ErrorInfo, ReactNode } from 'react';
import styles from './ErrorBoundary.module.css';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  public static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Uncaught error:', error, errorInfo);
  }

  public handleClearError = (): void => {
    this.setState({ hasError: false });
    window.location.reload();
  };

  public render(): React.JSX.Element | ReactNode {
    const { hasError } = this.state;
    const { children } = this.props;

    return hasError ? (
      <div className={styles['boundary-box']}>
        <h1 className={styles['boundary-heading']}>Something went wrong.</h1>
        <button
          className={styles['boundary-button']}
          onClick={this.handleClearError}
        >
          Try again
        </button>
      </div>
    ) : (
      children
    );
  }
}

export default ErrorBoundary;
