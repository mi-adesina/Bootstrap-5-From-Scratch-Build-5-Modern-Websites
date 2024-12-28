import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/main.scss';
import App from './App.tsx';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const container = document.getElementById('root');
if (container) { // Check if the root element exists
  const root = createRoot(container);
  root.render(
    <React.StrictMode> {/* Wrap with StrictMode */}
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found in HTML."); // Handle missing root
}