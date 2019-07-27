import React, {Component} from "react";
import './_navigation.scss';


class Nav extends Component {
    render() {
        return (
            <div className="navigation">
                <ul>
                    <li>
                        <a href="#">
                            <span>Co potrafię</span>
                            <span>Co potrafię</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span>Moje projekty</span>
                            <span>Moje projekty</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span>Kontakt</span>
                            <span>Kontakt</span>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Nav;

