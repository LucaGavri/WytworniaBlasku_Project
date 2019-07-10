import React, {Component} from "react";
import './_footer.scss';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="main-container">
                    <div className="footer-sections">
                        <div className="newslet">
                            <h3>skontaktuj się z nami</h3>
                            <input type="email" name="email"/><input type="submit" name="submit" value="wyślij"/>
                        </div>
                        <div className="social">
                            <a href="www.facebook.com"><i className="fab fa-facebook-square"></i></a>
                            <a href="www.twitter.com"><i className="fab fa-twitter-square"></i></a>
                            <a href="www.instagram.com"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p>Copyright 2019</p>
                </div>
            </div>
        )

    }
}

export default Footer;
