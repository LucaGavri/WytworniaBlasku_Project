import React from 'react';
import './App.css';
import './App.scss';
import Header from './header/_header.js'
import Marquee from "./marquee/_marquee.js";
import Slider from "./slider/_slider.js";
import Infos from "./infos/_infos.js";
import Footer from "./footer/_footer.js";
import Team from "./team/_team.js";


function App() {
    return (
        <>
            <div className="app">
                <Header/>
                <Marquee/>
                <Slider/>
                <Infos/>
                <Team/>
                <Footer/>
            </div>
        </>
    );
}

export default App;
