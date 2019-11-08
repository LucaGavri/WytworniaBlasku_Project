import React, {Component} from "react";
import './_contact.scss';


class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <div className="contactMain">
                    <div className="contactTxt">
                        <h3>Zapraszamy do kontaktu</h3>
                        <div className="contactUs">
                            <p><i className="fas fa-map-marker-alt"></i>Wiosenna 8</p>
                            <p> 05-430 Celestynów</p>

                            <p><i className="far fa-envelope"></i>
                                <a href="mailto:wytworniablaskukontakt@gmail.com">wytworniablaskukontakt@gmail.com</a>
                            </p>
                            <p><i className="fas fa-phone-alt"></i><a href="tel:+48576030926">576-030-926</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Contact;
