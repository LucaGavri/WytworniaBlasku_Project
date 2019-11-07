import React, {Component} from 'react';
import './App.css';
import './App.scss';
import Header from "./header/_header";
import Slider from "./slider/_slider";
import ContactCopy from "./contact&copyright/_contact";


class App extends Component {
    componentDidMount() {
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
                <div className="page">
                    <Header/>
                    <Slider/>
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
