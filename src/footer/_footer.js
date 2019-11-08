import React, {Component} from "react";
import './_footer.scss';


class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="media">
                    <h3>media</h3>
                    <div className="icons">
                        <a href="https://www.facebook.com/wytworniablaskudetailing/" target="_blank">
                            <i className="fab fa-facebook-square"></i></a>
                        <a href="https://m.me/wytworniablaskudetailing" target="_blank">
                            <i className="fab fa-facebook-messenger"></i></a>
                        <a href="https://www.instagram.com/wytworniablaskudetailing/" target="_blank">
                            <i className="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className="contactFoot">

                    <h3>kontakt</h3>
                    <p><i className="fas fa-map-marker-alt"></i>Wiosenna 8</p>
                    <p> 05-430 Celestynów</p>

                    <p><i className="far fa-envelope"></i>
                        <a href="mailto:wytworniablaskukontakt@gmail.com">wytworniablaskukontakt@gmail.com</a>
                    </p>
                    <p><i className="fas fa-phone-alt"></i><a href="tel:+48576030926">576-030-926</a>
                    </p>
                </div>
            </div>

        )
    }
}

export default Footer;

