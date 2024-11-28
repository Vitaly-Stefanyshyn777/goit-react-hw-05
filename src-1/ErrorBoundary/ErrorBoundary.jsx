// src/components/ErrorBoundary/ErrorBoundary.jsx

import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Оновити стан, щоб наступний рендер показав запасний UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Ви можете також зберегти інформацію про помилку у зовнішньому сервісі
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Ви можете рендерити запасний UI будь-яким способом
      return (
        <div style={{ padding: "20px", textAlign: "center" }}>
          <h1>Something went wrong.</h1>
          <p>{this.state.error?.message}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;