import React, {Component} from "react";
import './_copyright.scss';


class Copyright extends Component {
    render() {
        return (
                <div className="copyright">
                    <p> <span>&copy;</span>
                         2019, Made by
                        <a href="mailto:lukaszgawrys13@gmail.com"> LucaGavri</a>
                    </p>
                </div>
        )
    }
}

export default Copyright;
