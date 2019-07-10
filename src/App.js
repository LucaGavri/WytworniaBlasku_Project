import React from 'react';
import './App.css';
import './App.scss';
import Header from './header/_header.js'
import Marquee from "./marquee/_marquee.js";
import Slider from "./slider/_slider.js";
import Infos from "./infos/_infos.js";
import Footer from "./footer/_footer.js";

function App() {
    return (
        <>
            <Header/>
            <Marquee/>
            <Slider/>
            <Infos/>
            <Footer/>
        </>
    );
}

export default App;
