// /src/pages.js
import React from 'react';
import Home from "./pages/Home";
import EasterEgg from "./pages/EasterEgg";
import Login from "./pages/Login"
// import Support from "./Support"
// import About from "./About"
// import Contact from "./Contact"
import Register from "./pages/Register"
// import Forget from "./Forget"

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
// const Support_page = () =>{
//     return <Support/>;
// };
// const About_page = () =>{
//     return <About/>;
// };
// const Contact_page = () =>{
//     return <Contact/>;
// };
// const Forget_page = () =>{
//     return <Forget/>
// };

// export { Home_page,Login_page, Support_page,About_page ,Contact_page, Register_page,Forget_page };
export { Home_page, Easter_egg, Login_page, Register_page };