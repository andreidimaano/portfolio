import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/pages/Home';


function App() {
  return (
    <div className="app">
      <Router>
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
