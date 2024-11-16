import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Plans from './components/Plans';
import Profile from './components/Profile';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <Plans />
        <Profile />
      </main>
    </div>
  );
}

export default App;