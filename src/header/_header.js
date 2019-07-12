import React, {Component} from "react";
import './_header.scss';
import logo from '../images/fxlogo1.png';


class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="main-container">
                    <div className="logo">
                        <img src={logo} alt="logo"/>
                    </div>
                    <nav>
                        <ul className="navigation">
                            <li><a href="#" onClick={(event) => {
                                event.preventDefault();
                                document.querySelector('.main-slider').scrollIntoView({
                                    block: "start",
                                    inline: "nearest",
                                    behavior: "smooth"
                                });
                            }}>o nas</a></li>
                            <li><a href="#" onClick={(event) => {
                                event.preventDefault();
                                document.querySelector('.infos').scrollIntoView({
                                    block: "start",
                                    inline: "nearest",
                                    behavior: "smooth"
                                });
                            }}>informacje</a></li>
                            <li><a href="#" onClick={(event) => {
                                event.preventDefault();
                                document.querySelector('.traders').scrollIntoView({
                                    block: "start",
                                    inline: "nearest",
                                    behavior: "smooth"
                                });
                            }}>nasi traderzy</a></li>
                            <li><a href="#" onClick={(event) => {
                                event.preventDefault();
                                document.querySelector('.footer').scrollIntoView({
                                    block: "start",
                                    inline: "nearest",
                                    behavior: "smooth"
                                });
                            }}>kontakt</a></li>

                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Header;

