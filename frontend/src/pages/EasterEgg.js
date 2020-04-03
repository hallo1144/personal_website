import React, { Component } from 'react';
import { NavBar } from '../component/AppBar';
import Aluka from '../component/Aluka';
import './EasterEgg.css';

// import { Link } from 'react-router-dom';
// import Button from '@material-ui/core/Button';
// import Footer from "../component/Footer";

class Home extends Component{
    render(){
        return (
        <div>
            <NavBar/>
            <div id="pic">
                <Aluka />
            </div>
        </div>
        )
    }
}

export default Home;
