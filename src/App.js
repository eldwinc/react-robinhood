import React from 'react';
import './App.css';
import Header from './Header';
import Newsfeed from './Newsfeed';
import Stats from './Stats';

export default function App() {
  return (
    <div className="App">
      <div className="app-header">
        <Header />
      </div>
      <div className="app-body">
        <div className="app-container">
          <Newsfeed />
          <Stats />
        </div>
      </div>
    </div>
  );
}
