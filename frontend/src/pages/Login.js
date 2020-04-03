import React, { Component } from 'react';
import { NavBar } from '../component/AppBar';
import { Redirect } from 'react-router-dom';
// import axios from 'axios';

import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import './Login.css';

// import { Link } from 'react-router-dom';

class Home extends Component{
    constructor(){
        super()
        this.state = {isLoggedin: false}
    }

    handleSubmit(event) {
        console.log('clicked')
		event.preventDefault();
        // console.log(this.state);
        
        // axios.post("/api/login", 
        //     {account:this.state.Login_username_input,
        //     password:this.state.Login_password_input}
        // ).then(res => {
        //     console.log(res.data);
        //         if(res.data){
        //             if(res.data.message===true){
        //                 alert('登入成功，歡迎：'+res.data.data.username);
        //                 //window.location = "/";
        //                 this.setState({
        //                     isLogin:true
        //                 });
        //             }else{
        //                 alert("錯誤：\n"+res.data.description);
        //             }
        //         }
        // })
	}

    render(){
        if(this.state.isLoggedin === true)
        {
            return <Redirect to="/" />;
        
        }
        return (
        <div>
            <NavBar/>
            <div id="Login_form_container">
                <form onSubmit={this.handleSubmit}>
                    <div id="Login_row">
                        <div id="Login_login_text_container">
                            <p id="Login_login_text">Login :)</p>
                        </div>
                        <div>
                            <div id="Login_row">
                                <p id="Login_label_text">請輸入帳號: </p>
                                <div id="Login_textfield_container">
                                    <TextField id="Login_textfield" name="acount" type="text" />
                                </div>
                            </div>
                            <div id="Login_row">
                                <p id="Login_label_text">請輸入密碼: </p>
                                <div id="Login_textfield_container">
                                    <TextField id="Login_textfield" name="password" type="password" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="Login_button_container">
                        <Button id="Login_button" type="submit">submit</Button>
                    </div>
                </form>
            </div>
        </div>
        )
    }
}

export default Home;
