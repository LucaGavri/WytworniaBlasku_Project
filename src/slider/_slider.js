import React, {Component} from "react";
import './_slider.scss';
import photoOne from './../images/1.jpg';
import photoTwo from './../images/2.jpg';
import photoThree from './../images/3.jpg';
import photoFour from './../images/4.jpg';


class Slider extends Component {
    componentDidMount() {
        let myIndex = 0;
        carousel();

        function carousel() {
            let i;
            let x = document.getElementsByClassName("slider-images");
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            myIndex++;
            if (myIndex > x.length) {
                myIndex = 1
            }
            x[myIndex - 1].style.display = "block";
            setTimeout(carousel, 5000);
        }
    }

    render() {
        return (
            <div className="main-slider">
                <div className="slider">
                    <div className="slider-images">
                        <div className="slide1">
                            <img src={photoOne} alt="autodetailing"/>
                        </div>
                    </div>
                    <div className="slider-images">
                        <div className="slide2">
                            <img src={photoTwo} alt="wnetrze"/>
                        </div>
                    </div>
                    <div className="slider-images">
                        <div className="slide3">
                            <img src={photoThree} alt="lakier"/>
                        </div>
                    </div>
                    <div className="slider-images">
                        <div className="slide4">
                            <img src={photoFour} alt="wnetrze2"/>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Slider;
