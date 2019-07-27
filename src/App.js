import React, {Component} from 'react';
import './App.css';
import './App.scss';
import Welcome from "./welcome/_welcome";
import Header from './header/_header'
import Nav from "./navigation/_navigation";
import Skills from "./skills/_skills";


class App extends Component {
    componentDidMount() {

        let getInBtn = document.querySelector(".get-in");
        getInBtn.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(".welcome-app").style.display = "none";
            document.querySelector(".page").style.display = "block";
        })

    }

    render() {
        return (
            <div className="app">
                <div className="welcome-app">
                    <Welcome/>
                </div>
                <div className="page">
                    <Header/>
                    <Nav/>
                    <Skills/>
                </div>
            </div>
        )
    }
}

export default App;
