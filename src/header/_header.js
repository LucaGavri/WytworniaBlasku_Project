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
                            <li><a href="#">o nas</a></li>
                            <li><a href="#">handluj na cfd</a></li>
                            <li><a href="#">handluj na forex</a></li>
                            <li><a href="#">informacje</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}
export default Header;

