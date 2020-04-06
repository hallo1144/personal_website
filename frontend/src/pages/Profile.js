import React, { Component } from 'react';
import { NavBar } from '../component/AppBar';
// import default_image from '../img/default.png';
import axios from 'axios';
import './Profile.css';

// const images = require.context('../upload/images', true);

class Profile extends Component{
    constructor() {
        super();

        this.state = {
            global_count: 0,
            personal_count: 0,
            username: 'default user'
        }

        axios.get('/api/profile').then(res => {
            // console.log(res.data)
            if(res.data){
                this.setState({
                    global_count: res.data.global_count,
                    personal_count: res.data.personal_count,
                    username: res.data.username,
                })
            }
            else{
                alert('sorry, backend server seems to have some errors 1')
            }
        }).catch(err => {
            // console.log(err)
            alert('sorry, backend server seems to have some errors 2')
        })
    }
    
    render(){
        return (
        <div>
            <NavBar/>
            <div id="Profile_container">
                <div id="Profile_image_container">
                    <img id="Profile_image" src={'/api/profileImage'} alt="ERROR" />
                </div>
                <div id="Profile_content_container">
                    <label id="Profile_welcome_text">Welcome, {this.state.username}!!</label>
                    <h1 id="Profile_count_text">本網站已被瀏覽 {this.state.global_count} 次!!</h1>
                    <h1 id="Profile_count_text">您已造訪本網站 {this.state.personal_count} 次!!</h1>
                </div>
            </div>
        </div>
        )
    }
}

export default Profile;
