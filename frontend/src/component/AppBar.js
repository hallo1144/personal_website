import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Logo from './Logo';
import './AppBar.css'; 

const NavBar = () => {
  return (
    <div id = "AppBar_root">
      <AppBar id = "AppBar_Bar">
        <Toolbar >
            <div id = "AppBar_Logo"><Link  to="/"><Logo/></Link></div>
            <div id = "AppBar_space"></div>
            <div id = "AppBar_menu">
                <Link id = "AppBar_Link" to="/"><Button id = "AppBar_menuButton">let's talk!</Button></Link>
                <Link id = "AppBar_Link" to="/profile" onClick={() => { window.location.pathname = "/profile" }}>
                    <Button id = "AppBar_menuButton">Profile</Button>
                </Link>
                <Link id = "AppBar_Link" to="/register"><Button id = "AppBar_menuButton">Register</Button></Link>
                <Link id = "AppBar_Link" to="/login"><Button id = "AppBar_menuButton">Login</Button></Link>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export { NavBar };