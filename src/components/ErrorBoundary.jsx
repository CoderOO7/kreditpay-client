import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log({ error });
    console.log({ errorInfo });
  }

  render() {
    const { hasError } = this.state;

    if (hasError) {
      return (
        <div className='h-screen flex flex-col justify-center items-center space-y-2'>
          <p className='text-8xl'>🤔</p>
          <p className='text-3xl font-bold text-center'>Something is fishy</p>
          <p>Open the browser console to see what's gone wrong</p>
        </div>
      );
    }
    // eslint-disable-next-line
    return this.props.children;
  }
}

export default ErrorBoundary;
