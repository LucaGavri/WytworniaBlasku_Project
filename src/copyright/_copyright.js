import React, {Component} from "react";
import './_copyright.scss';


class Copyright extends Component {
    render() {
        return (
                <div className="copyright">
                    <p> <span>&copy;</span>
                         2019, Made by
                        <a href="https://lucagavri.github.io/Portfolio_Website/" target="_blank" rel="noreferrer noopener"> LucaGavri</a>
                    </p>
                </div>
        )
    }
}

export default Copyright;
