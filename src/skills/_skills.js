import React, {Component} from "react";
import "./_skills.scss"

class Skills extends Component {
    render() {
        return (
            <div className="skills">
                <div className="skills-elems">
                    <div className="skills-img">
                    </div>
                    <div className="skills-text">
                        <h3>moje umiejętności</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS, SASS</li>
                            <li>JavaScript, JQuery, AJAX</li>
                            <li>React.js</li>
                            <li>Git</li>
                            <li>Gulp, WebPack</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;

