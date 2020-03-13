import React from 'react';
import './App.scss';
import config from './config.json';
import UserRole from './components/UserRole'

function App() {
  const { url } = config;
  return (
    <div className="App">
      <UserRole />
    </div>
  );
}

export default App;
