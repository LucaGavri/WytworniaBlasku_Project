import React, {Component} from "react";
import './_realizations.scss';
import RealizationsGallery from "./../realizationsGallery/_realizationsGallery";


class Realizations extends Component {
    render() {
        return (
            <div className="realizations">
                <div className="realizationsMain">
                    <h3>Nasze Realizacje</h3>
                    <div className="realizationsGallery">
                        <RealizationsGallery/>
                    </div>
                </div>
            </div>

        )
    }
}

export default Realizations;
