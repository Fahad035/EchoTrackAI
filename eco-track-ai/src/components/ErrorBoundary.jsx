import React from "react";

class ErrorBoundary extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true
    };
  }

  componentDidCatch(error) {
    console.error(error);
  }

  render() {

    if (this.state.hasError) {

      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Something went wrong
            </h1>

            <button
              onClick={() =>
                window.location.reload()
              }
              className="bg-green-600 px-6 py-3 rounded-lg"
            >
              Reload Application
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;