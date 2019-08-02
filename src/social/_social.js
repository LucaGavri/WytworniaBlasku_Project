import React, {Component} from "react";
import './_social.scss';


class Social extends Component {
    render() {
        return (
            <div className="social">
                <div className="social-part">
                    <div className="social-icon social-upper-part git">
                        <div className="social-outside">
                            <i className="fab fa-github"></i>
                            <h4>GitHub</h4>
                        </div>
                    </div>
                    <div className="social-icon social-downer-part">
                        <div className="social-text">
                            <p>Zajrzyj na Github'a i zobacz moje projekty</p>
                            <a href="https://www.github.com/LucaGavri/" target="_blank">
                                wejdź
                            </a>
                        </div>
                    </div>
                </div>
                <div className="social-part">
                    <div className="social-icon social-upper-part linkedin">
                        <div className="social-outside">
                            <i className="fab fa-linkedin-in"></i>
                            <h4>LinkedIn</h4>
                        </div>
                    </div>
                    <div className="social-icon social-downer-part">
                        <div className="social-text">
                            <p>Wejdź na LinkedIn i zapoznaj się z moim życiorysem</p>
                            <a href="https://www.linkedin.com/in/lukasz-gawrys" target="_blank">
                                wejdź
                            </a>
                        </div>
                    </div>
                </div>
                <div className="social-part">
                    <div className="social-icon social-upper-part insta">
                        <div className="social-outside">
                            <i className="fab fa-instagram"></i>
                            <h4>Instagram</h4>
                        </div>
                    </div>
                    <div className="social-icon social-downer-part">
                        <div className="social-text">
                            <p>Zajrzyj na Instagram i sprawdź co u mnie</p>
                            <a href="https://www.instagram.com/lucagavri/" target="_blank">
                                wejdź
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Social;

