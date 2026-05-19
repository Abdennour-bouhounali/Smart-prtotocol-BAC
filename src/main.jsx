import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
// To make the book more powerful, I want to move the translation tables into a dedicated section.

// I have already prepared the full content in the file: bac_intelligence_system.html.

// Requirements:
// Integrate the full conent content from bac_intelligence_system.html into the book , do not forget anything.
// Place it before the teacher section.
// Use the existing book design only (do NOT use the styling from bac_intelligence_system.html).
// Maintain full consistency with the book’s global CSS classes.
// Pagination Rule (very important):
// The content must be automatically split into multiple A4-sized pages.
// Use the existing JS engine file to handle pagination and page generation.
// Ensure proper page breaks without breaking tables or content structure.
// Styling Rule:
// Reuse only the existing global CSS classes from the book.
// Do not introduce new design styles or layouts. use the full content without any changes