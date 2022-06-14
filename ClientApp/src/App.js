import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Articole } from './components/Articole';
import { DespreNoi } from './components/DespreNoi';
import { Contact } from './components/Contact';


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
      </Layout>
    );
  }
}
