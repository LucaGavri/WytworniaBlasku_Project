import React, {Component} from "react";
import './_team.scss';

class Team extends Component {
    render() {
        return (
            <div className="team">
                <h3 className="traders">
                    nasi traderzy
                </h3>
                <div className="main-container">
                    <div className="persons">
                        <div className="person1">
                            <p>
                                Jteve Sobs <br/>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, labore?
                            </p>
                        </div>
                    </div>
                    <div className="persons">
                        <div className="person2">
                            <p>
                                Gill Bates <br/>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, labore?
                            </p>

                        </div>
                    </div>
                    <div className="persons">
                        <div className="person3">
                            <p>
                                Mack Ja <br/>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, labore?
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Team;
