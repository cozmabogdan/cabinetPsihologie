import React, { Component } from 'react';
import './adminDashboard.css';

const names = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const days = [];

const months = [...Array(11).keys()].map(key => new Date(0, key).toLocaleString('ro-RO', { month: 'long' }));

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth() + 1; 

const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth);

for(var i = 1; i<= daysInCurrentMonth; i++){
    days.push(i);
}

export class AdminDashboard extends Component {
  static displayName = AdminDashboard.name;  
  render () {
    console.log(days);
    return (    
      <div>
        <h1 className='title center-text mb-3 mt-3'>Admin Dashboard</h1>   
        <div className='container'>
            <div className='calendar border'>
                {names.map(name=><h5 key={name}>{name}</h5>)}
            </div>
            <div className='calendar border'> 
            {days.map(day=>
                <div className='days-container'>                    
                    <div className='day-container'>                        
                        <h5 key={day}>{day}</h5>                        
                    </div>
                </div>                
            )} 
            </div>
        </div>                  
      </div>
    );
  }
}
