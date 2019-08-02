import React, {Component} from 'react';
import './App.css';
import './App.scss';
import Welcome from "./welcome/_welcome";
import Header from "./header/_header";
import Nav from "./navigation/_navigation";
import Skills from "./skills/_skills";
import Social from "./social/_social";
import ContactCopy from "./contact&copyright/_contact";


class App extends Component {
    componentDidMount() {
        //    btn w welcome page
        let getInBtn = document.querySelector(".get-in");
        getInBtn.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(".welcome-app").style.display = "none";
            document.querySelector(".page").style.display = "block";
        });

        //    pokazanie btn'a strzałki w gore
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
            if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
                document.querySelector(".scrollUp").style.display = "block";
            } else {
                document.querySelector(".scrollUp").style.display = "none";
            }
        }

        //    przesuwanie w gore z btn'a strzałki w gore
        document.querySelector(".scrollUp").addEventListener("click", function (e) {
            (e).preventDefault();
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });

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
                    <Social/>
                    <ContactCopy/>
                    <div className="scrollUp">
                            <i className="fas fa-angle-up"></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
