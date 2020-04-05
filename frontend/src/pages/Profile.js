import React, { Component } from 'react';
import { NavBar } from '../component/AppBar';
import './Profile.css';

class Home extends Component{
    constructor() {
        super();
        fetch('/api/profile');
    }
    
    render(){
        return (
        <div>
            <NavBar/>
            <div id="Home_container">
                
            </div>
        </div>
        )
    }
}

export default Home;
