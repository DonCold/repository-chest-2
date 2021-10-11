import React from 'react';
import { Link, Route, Switch } from 'wouter';

import { UsersContextProvider } from './context/UsersContext';
import { GifsContextProvider } from '@/context/GifsContext';

import Home from '@/pages/Home';
import SearchResults from '@/pages/SearchResults';

import Details from '@/components/Details';
import Header from '@/components/Header';
import Login from '@/components/Login';
import PageNotFound from '@/components/PageNotFound';

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
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/search/:query/:rating?" component={SearchResults} />
              <Route path="/gif/:id" component={Details} />
              <Route path="/login" component={Login} />
              <Route path="/:404" component={PageNotFound} />
            </Switch>
          </GifsContextProvider>
        </section>
      </div>
    </UsersContextProvider>
  )
}

export default App;
