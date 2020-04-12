import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Home_page, Easter_egg, Login_page, Register_page, Profile_page, Message_page, Logout_page } from './Route';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                <Route path="/" exact component={Home_page} />
                <Route path="/surprise" exact component={Easter_egg} />
                <Route path="/login" exact component={Login_page} />
                <Route path="/register" exact component={Register_page} />
                <Route path="/profile" exact component={Profile_page} />
                <Route path="/message" exact component={Message_page} />
                <Route path="/logout" exact component={Logout_page} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;