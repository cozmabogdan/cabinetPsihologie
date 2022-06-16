import React, { Component } from 'react';
import './login.css';

export class Login extends Component {
  static displayName = Login.name;

  render () {
    return (    
      <div>
        <h1 className='title center-text mb-3 mt-3'>Login</h1> 

        {/* Login form         */}
        <form className='login-form'>            
            <div class="form-outline mb-4">
                <label class="form-label" for="form2Example1">Email</label>
                <input type="email" id="form2Example1" class="form-control" />                
            </div>
        
            <div class="form-outline mb-4">
                <label class="form-label" for="form2Example2">Parola</label>
                <input type="password" id="form2Example2" class="form-control" />                
            </div>

            <div class="row mb-4">                
                <div class="d-flex justify-content-center">                
                    <a href="#!">Ai uitat parola?</a>
                </div>
            </div>
                                    
            <button type="button" class="btn btn-primary btn-block mb-4">Intra in cont</button>            
        </form>               
      </div>
    );
  }
}
