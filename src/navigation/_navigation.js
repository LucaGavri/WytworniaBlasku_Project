import React, {Component} from "react";
import './_navigation.scss';


class Nav extends Component {
    render() {
        return (
            <div className="navigation">
                <ul>
                    <li>
                        <a href="#" onClick={(event) => {
                            event.preventDefault();
                            document.querySelector('.skills').scrollIntoView({
                                block: "start",
                                inline: "nearest",
                                behavior: "smooth"
                            });
                        }}>
                            <span>co potrafię</span>
                            <span>co potrafię</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span>o mnie</span>
                            <span>o mnie</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span>kontakt</span>
                            <span>kontakt</span>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Nav;

