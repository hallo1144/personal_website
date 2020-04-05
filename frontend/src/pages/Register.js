import React, { Component } from 'react';
import { NavBar } from '../component/AppBar';
import { Redirect } from 'react-router-dom';
import ImageUploader from 'react-images-upload';
import axios from 'axios';

import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import './Register.css';

// import { Link } from 'react-router-dom';

class Home extends Component{
    constructor(){
        super();
        
        this.state = {
            acount: "",
            password: "",
            password_confirm: "",
            isRegistered: false,
            isUploaded: false,
            file: null,
            filename: "",
            fileSelected: false
        };

        fetch('/api');
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
    }

    handleImageChange(picture){
        if(picture.length !== 0){
            this.setState({
                filename: picture[0].name,
                file: picture[0],
                fileSelected: true
            });
        }
        else{
            this.setState({
                filename: '',
                file: null,
                fileSelected: false
            })
        }
    }

    handleInputChange(event) {
		const value = event.target.value;
		const name = event.target.name;
		
		this.setState({[name]: value});
	}

    handleSubmit(event) {
		event.preventDefault();
        // console.log(this.state);
        
        if(this.state.password !== this.state.password_confirm){
            alert("password and confirm_password are not same!!");
            return;
        }
        
        axios.post("/api/register",
            {username: this.state.username,
            password: this.state.password}
        ).then(res => {
            if(res.data){
                console.log(res.data);
                this.setState( {isRegistered: res.data.isRegistered} );

                if(this.state.isRegistered){
                    alert('welcome, ' + this.state.username + '!!');
                }
                else if(res.data.status === "miss_acc_or_pass"){
                    alert("please type in username AND password :)");
                }
                else if(res.data.status === "xss_found"){
                    alert("why you need '<' in your username or password? don't ever try XSS, kiddie.");
                }
                else if(res.data.status === "acc_pass_too_long"){
                    alert("username or password is too long!! ( > 48 chars )");
                }
                else if(res.data.status === "server_err"){
                    alert("sorry, some errors occur when querying db");
                }
                else if(res.data.status === "username_dup"){
                    alert("sorry, this username is already been registered. please try another username name.");
                }
                else if(res.data.status === "pass_too_short"){
                    alert("password too short! please choose stronger password");
                }
            }
            else{
                alert("sorry, some errors occur when posting data");
            }
        }).then( () => {
            if(this.state.fileSelected && this.state.isRegistered){
                const data = new FormData();
                data.append('file', this.state.file);
                axios.post("/api/upload", data, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(res => {
                    if(res.data){
                        console.log(res.data);
                        this.setState({isUploaded: res.data.success})
        
                        if(res.data.status === "no_image_uploaded"){
                            alert("where is your image? QQ ");
                        }
                        else if(res.data.status === "not_an_image"){
                            alert("please upload IMAGE!!");
                        }
                    }
                    else{
                        alert("sorry, some errors occur when posting data");
                    }
                }).catch(err => {
                    console.log(err)
                    alert("sorry, some errors occur when posting data");
                })
            }
        }).catch(error => {
            console.log(error)
            alert("sorry, some errors occur when posting data");
        })
	}

    render(){
        if(this.state.isRegistered){
            return <Redirect to="/" />;
        }

        return (
        <div>
            <NavBar/>
            <div id="Register_root_container">
                <div id="Register_form_container">
                    <form onSubmit={this.handleSubmit}>
                        <div id="Register_row">
                            <div id="Register_login_text_container">
                                <p id="Register_login_text">Register :)</p>
                            </div>
                            <div>
                                <div id="Register_row">
                                    <p id="Register_label_text">請輸入帳號: </p>
                                    <div id="Register_textfield_container">
                                        <TextField id="Register_textfield" name="username" type="text" onChange={this.handleInputChange}  />
                                    </div>
                                </div>
                                <div id="Register_row">
                                    <p id="Register_label_text">請輸入密碼: </p>
                                    <div id="Register_textfield_container">
                                        <TextField id="Register_textfield" name="password" type="password" onChange={this.handleInputChange}  />
                                    </div>
                                </div>
                                <div id="Register_row">
                                    <p id="Register_label_text">請確認密碼: </p>
                                    <div id="Register_textfield_container">
                                        <TextField id="Register_textfield" name="password_confirm" type="password" onChange={this.handleInputChange}  />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="Register_button_container">
                            <Button id="Register_submit_button" type="submit">submit</Button>
                        </div>
                    </form>
                </div>
                <div id="Register_file_upload_container">
                    <ImageUploader
                        withIcon={true}
                        buttonText='Choose images'
                        imgExtension={['.jpg', '.gif', '.png', '.jpeg', '.bmp']}
                        withPreview={true}
                        singleImage={true}
                        maxFileSize={12582912}
                        label={'Max file size: 5MB, ' + (this.state.fileSelected ? 'select ' + this.state.filename : 'no image selected')}
                        onChange={this.handleImageChange}
                    />
                </div>
            </div>
        </div>
        )
    }
}

export default Home;

// <div>
//     <Button id="Register_file_upload_button" variant="contained" component="label">
//         upload image
//         <input type="file" style={{display: "none"}} onChange={this.handleFileChange} accept="image/*" />
//     </Button>
//     <label id="Register_file_name">{this.state.filename}</label>
// </div>