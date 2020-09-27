import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Home from './components/pages/Home';
import User from './components/users/User';
import NotFound from './components/pages/NotFound';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import './App.css';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navigation />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/github-finder' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
