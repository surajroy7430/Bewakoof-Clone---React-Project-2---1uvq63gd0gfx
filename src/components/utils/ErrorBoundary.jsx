import React, { useState } from 'react';

function ErrorBoundary({ children }) {
    const [hasError, setHasError] = useState(false);

    const componentDidCatch = (error, errorInfo) => {
        // Handle the error (for example, log it to an error reporting service)
        console.error(error, errorInfo);
        setHasError(true);
    };

    if (hasError) {
        // You can render any custom fallback UI here
        return <h1>Something went wrong.</h1>;
    }

    return children;
}

export default ErrorBoundary;
