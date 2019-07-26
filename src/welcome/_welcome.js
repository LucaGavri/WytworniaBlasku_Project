import React, {Component} from "react";
import './_welcome.scss';


class Welcome extends Component {
    render() {
        return (
            <div className="welcome">
                <p className="typing" data-text="Witam na mojej stronie. Łukasz Gawryś">Witam na mojej stronie. Łukasz
                    Gawryś</p>
                <button className="get-in">Wejdź</button>
            </div>
        )
    }
}

export default Welcome;