import React from 'react';
import './App.css';
import './App.scss';
import Header from './header/_header.js'
import Marquee from "./marquee/_marquee.js";
import Slider from "./slider/_slider.js";

function App() {
    return (
        <>
            <Header/>
            <Marquee/>
            <Slider/>
        </>
    );
}

export default App;
