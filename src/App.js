import React from 'react';
import { Link, Switch, Route } from 'react-router-dom'

import './App.css';
import Login from './components/login';


import Admin from './components/admin';

import Register from './components/register';
import Electronics from './products/Eletronics/Electronics';
import Fashion from './products/Fashion/Fashion';
import Games from './products/Games/Games'
import Navbar from './components/Navbar';
import Sfo from './products/SFO/Sfo';



function App() {
  return (
    <div>
      <Navbar />

      <Switch>

        <Route exact path="/" component={Login} />

        <Route exact path="/admin" component={Admin} />
        <Route exact path="/register" component={Register} />
        <Route path="/logout" component={Login} />
        <Route path="/Electronics" component={Electronics} />
        <Route path="/Fashion" component={Fashion} />
        <Route path="/Games" component={Games} />
        <Route path="/SFO" component={Sfo} />





      </Switch>
    </div>
  );
}

export default App;
