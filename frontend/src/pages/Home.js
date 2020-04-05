import React, { Component } from 'react';
import image from '../img/pikachu.png';
import { NavBar } from '../component/AppBar';
import './Home.css';

class Home extends Component{
    constructor(){
        super();

        fetch('/api');
    }

    render(){
        return (
        <div>
            <NavBar/>
            <div id="Home_container">
                <div id="Home_image_column">
                    <div id="Home_image"><img src={image} alt="leftImage" width="250px" height="250px" /></div>
                    <p id="Home_image_name">
                        台灣大學 電機工程學系<br />
                        賴侃軒
                    </p>
                    <p id="Home_image_id">
                        b06901183
                    </p>
                </div>
                
                <div id="Home_content">
                    <h1 id="Home_content_title">
                        Welcome to my website :)
                    </h1>
                    <p id="Home_content_context">
                        嗨嗨，我是台大電機系的學生<br />
                        我最喜歡獵人，最討厭冨樫拖更，阿路加是我妹妹(誤)<br />
                        某堂課的作業是要架個網站給別人駭<br />
                        但是我又怕被駭爆 分數掉光光<br />
                        只好放個皮卡丘壓一下<br />
                        駭我網站的人全部都會得痔瘡
                    </p>
                </div>
            </div>
        </div>
        )
    }
}

export default Home;
