import React, {Component} from 'react';
import './App.css';
import './App.scss';
import Header from './header/_header.js'
import Welcome from "./welcome/_welcome";


class App extends Component {
    componentDidMount() {

        let getInBtn = document.querySelector(".get-in");
        getInBtn.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(".welcome-app").style.display="none";
            document.querySelector(".page").style.display="block";
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
                </div>
            </div>
        )
    }
}

export default App;
