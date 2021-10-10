import React from 'react';
import { Link, Route } from 'wouter';

import { UsersContextProvider } from './context/UsersContext';
import { GifsContextProvider } from '@/context/GifsContext';

import Home from '@/pages/Home/index';
import SearchResults from '@/pages/SearchResults/index';

import Details from '@/components/Details';
import Header from '@/components/Header/index';
import Login from '@/components/Login/index';

import './App.css';

function App() {
  return (
    <UsersContextProvider>
      <div className="App">
        <section className="App-content">
          <Header/>
          <Link to="/">
            <h1 className="App-title">
              Giphy App
            </h1>
          </Link>
          <GifsContextProvider>
            <Route exact path="/" component={Home} />
            <Route path="/search/:query/:rating?" component={SearchResults} />
            <Route path="/gif/:id" component={Details} />
            <Route path="/login" component={Login} />
          </GifsContextProvider>
        </section>
      </div>
    </UsersContextProvider>
  )
}

export default App;
