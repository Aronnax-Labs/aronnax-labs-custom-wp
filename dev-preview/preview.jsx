import React from 'react';
import { createRoot } from 'react-dom/client';
import SimpleNavbar from './SimpleNavbar';

function App() {
  return (
    <>
      <SimpleNavbar />
      <main style={{ padding: '2rem' }}>
        <h1>Page Content</h1>
        <p>This is example page content below the navbar.</p>
      </main>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
