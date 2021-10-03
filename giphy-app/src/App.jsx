import React from 'react';
import { Link, Route } from 'wouter';

import ListGif from './components/ListGif';

import './App.css';

function App() {

  return (
    <div className="App">
      <section className="App-content">
        <Link to="/"><h1>Giphy App</h1></Link>
        <Route path="/gifs/:query" component={ListGif} />
      </section>
    </div>
  )
}

export default App;
