import React from 'react';
import { Link, Route } from 'wouter';

import { GifsContextProvider } from './context/GifsContext';

import Home from './pages/Home/index';
import SearchResults from './pages/SearchResults/index';

import Details from './components/Details';

import './App.css';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/">
          <h1 className="App-title">Giphy App</h1>
        </Link>
        <GifsContextProvider>
          <Route exact path="/" component={Home} />
          <Route path="/search/:query/:rating?" component={SearchResults} />
          <Route path="/gif/:id" component={Details} />
        </GifsContextProvider>
      </section>
    </div>
  )
}

export default App;
