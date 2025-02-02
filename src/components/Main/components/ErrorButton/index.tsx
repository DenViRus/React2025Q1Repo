import React, { Component } from 'react';
import styles from './ErrorButton.module.css';

interface ErrorButtonProps {
  hasError: boolean;
}

interface ErrorButtonState {
  hasError: boolean;
}

class ErrorButton extends Component<ErrorButtonProps, ErrorButtonState> {
  public constructor(props: ErrorButtonProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  private handleThrowError = () => {
    console.error('ErrorButton: handleThrowError');
    this.setState({ hasError: true });
  };

  public render(): React.JSX.Element {
    const { hasError } = this.state;

    if (hasError) {
      throw new Error('Error thrown by ErrorButton');
    }

    return (
      <button
        className={styles['error-button']}
        onClick={this.handleThrowError}
      >
        Error Button
      </button>
    );
  }
}

export default ErrorButton;
