import React, {Component} from "react";
import './_header.scss';
import logo from './../images/LOGO-str.jpg'


class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-container">
                    <div className="logo">
                        <img src={logo} alt="logo"/>
                    </div>
                    <nav className="navigation">
                        <ul className="nav1">
                            <li><a className="aboutUsClick" href="#">o nas</a></li>
                            <li><a className="ofertClick" href="#">oferta</a></li>
                            <li><a className="realizationsClick" href="#">realizacje</a></li>
                            <li><a className="contactClick" href="#">kontakt</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Header;

