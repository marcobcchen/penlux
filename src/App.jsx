import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
// import Nav from './components/Nav';
import Header from './components/Header';
import Home from './views/Home';
import Press from './views/Press';

const App = () => (
  <Router>
    {/* Hello world */}
    {/* <Home /> */}
    <Route exact path="/" component={Home} />
    <Route exact path="/press" component={Press} />
    <Header />
    {/* <Nav /> */}
  </Router>
);

export default App;
