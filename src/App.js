import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactAutoCompleteSearch from './reactsearchapp'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="search-box">
        <div className="region-autosuggest-container">
        <ReactAutoCompleteSearch/>
        </div>
      </div>
      </header>
    </div>
  );
}

export default App;
