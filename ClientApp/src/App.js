import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/home/Home';
import { Articole } from './components/articole/Articole';
import { DespreNoi } from './components/desprenoi/DespreNoi';
import { Contact } from './components/contact/Contact';
import { Login } from './components/login/Login';
import { AdminDashboard } from './components/adminDashboard/AdminDashboard';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (              
        <Layout>
          <Route exact path='/' component={Home} />
          <Route path='/articole' component={Articole} />
          <Route path='/despreNoi' component={DespreNoi} />
          <Route path='/contact' component={Contact} />
          <Route path='/login' component={Login} />
          <Route path='/adminDashboard' component={AdminDashboard} />          
        </Layout>         
    );
  }
}
