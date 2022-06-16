import React, { Component } from 'react';
import './adminDashboard.css';

const names = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];


export class AdminDashboard extends Component {
  static displayName = AdminDashboard.name;
  
  render () {
    return (    
      <div>
        <h1 className='title center-text mb-3 mt-3'>Admin Dashboard</h1>   
        <div className='container'>
            <div className='calendar border'>
                {names.map(name=><h5>{name}</h5>)}
            </div>
            <div className='calendar border'> 
            {days.map(day=>
                <div className='days-container'>                    
                    <div className='day-container'>                                                                    
                        
                            <h5>{day}</h5>
                        
                    </div>
                </div>                
            )} 
            </div>
        </div>                  
      </div>
    );
  }
}
