import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { Collapse, Container, Navbar, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { SideNavbar } from '../sideNavbar/SideNavbar';
import { Programari } from './programari/Programari';
import './adminDashboard.css';

const names = ['Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri', 'Sambata', 'Duminica'];
const days = [];

const months = [...Array(12).keys()].map(key => new Date(0, key).toLocaleString('ro-RO', { month: 'long' }));

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

const date = new Date();
const first_date = new Date(date.getFullYear(), date.getMonth(), 1);
const firstMonthDate = first_date.toLocaleString('ro-RO', { weekday: 'long'});
const currentYear = date.getFullYear();
const currentMonth = date.getMonth() + 1; 
const dayOfWeek = first_date.getDay();

const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth);

for(var i = 1; i<= daysInCurrentMonth; i++){
    days.push(i);
}

export class AdminDashboard extends Component {
  static displayName = AdminDashboard.name;  
  render () {   
    console.log(dayOfWeek);     
    return (    
      <Container>
        <SideNavbar />
        {/* <h1 className='title center-text mb-3 mt-3'>Admin Dashboard</h1>   
        <div className='container'>            
            <div className='calendar border'>
                <h5 className='month'>{months[currentMonth]}</h5>
                {names.map(name=>
                    <h5 key={name}>{name}</h5>
                )}
                {days.map(day=>                    
                    <div className='days-container'>                    
                        <div className='day-container'>                        
                            <h5 key={day}>{day}</h5>                        
                        </div>
                    </div>                
                )} 
            </div>           
        </div>                   */}
        <Switch>
          <Route exact path='/' component={AdminDashboard} />
          <Route path='/programari' component={Programari} />
        </Switch>
      </Container>
    );
  }
}
