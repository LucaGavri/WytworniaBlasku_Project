import React, {Component} from "react";
import './_contact.scss';
import MapContainer from './../map/_map';


class Contact extends Component {

    render() {
        return (
            <div className="contact">
                <div className="contactMain">
                    <div className="contactTxt">
                        <h3>Zapraszamy do kontaktu</h3>
                        <div className="contactMap">
                            <MapContainer/>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Contact;
