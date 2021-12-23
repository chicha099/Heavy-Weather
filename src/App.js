import './App.css';
import { Route } from 'react-router-dom'
import React from 'react';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import Locate from './components/Location/Locate';

function App() {
  return (
    <React.Fragment>
      <Route  path='/' component={Nav} />
      <Route exact path='/' component={Home} />
      <Route exact path='/details/:id' component={Details} />
      <Route path='/locate/:lon/:lat' component={Locate} />
    </React.Fragment>
  );
}

export default App;
