import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import LoadingSpinner from 'ultimate-dashboard-react/dist/components/LoadingSpinner';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <LoadingSpinner />
    </React.StrictMode>
);
