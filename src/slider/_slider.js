import React, {Component} from "react";
import './_slider.scss';
import photoOne from './../images/IMG_8654.JPG';
import photoTwo from './../images/IMG_20181124_150312.jpg';
import photoThree from './../images/IMG_20190116_135451.jpg';
import photoFour from './../images/IMG_20190328_172659.jpg';
import photoFive from './../images/IMG_20191003_171712.jpg';


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
            setTimeout(carousel, 6000);
        }
    }

    render() {
        return (
            <div className="main-slider">
                <div className="slider">
                    <div className="slider-images">
                        <div className="slide1">
                            <img src={photoOne} alt="photo-one"/>
                        </div>
                    </div>
                    <div className="slider-images">
                        <div className="slide2">
                            <img src={photoTwo} alt="photo-two"/>
                        </div>
                    </div>
                    <div className="slider-images">
                        <div className="slide3">
                            <img src={photoThree} alt="photo-three"/>
                        </div>
                    </div>
                    <div className="slider-images">
                        <div className="slide4">
                            <img src={photoFour} alt="photo-four"/>
                        </div>
                    </div>
                    <div className="slider-images">
                        <div className="slide5">
                            <img src={photoFive} alt="photo-five"/>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Slider;
