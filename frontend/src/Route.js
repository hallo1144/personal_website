// /src/pages.js
import React from 'react';
import Home from "./pages/Home";
import EasterEgg from "./pages/EasterEgg";
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import Register from "./pages/Register"

const Home_page = () =>{
    return <Home/>;
};
const Easter_egg = () =>{
    return <EasterEgg />;
};
const Login_page = () =>{
    return <Login/>;
};
const Register_page = () =>{
    return <Register/>
};
const Profile_page = () =>{
    return <Profile/>;
};
// const About_page = () =>{
//     return <About/>;
// };
// const Contact_page = () =>{
//     return <Contact/>;
// };
// const Forget_page = () =>{
//     return <Forget/>
// };

export { Home_page, Easter_egg, Login_page, Register_page, Profile_page };