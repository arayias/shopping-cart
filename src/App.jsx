import React from 'react';
import Navigation from './components/Navigation';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
