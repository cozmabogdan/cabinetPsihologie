import React, { Component } from 'react';
import './home.css';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (    
      <div>
        <h1 className='title center-text mb-3 mt-3'>Cabinet Psihologie Cozma</h1>                  
      </div>
    );
  }
}
