import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import HealthBox from './Components/HealthComponent';

function App() {
  return (
    <div>
      <HealthBox />
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
