import React, {Component} from "react";
import './_slider.scss';

class Slider extends Component {
    render() {
        // let myIndex = 0;
        // carousel();
        //
        // function carousel() {
        //     let i;
        //     let x = document.getElementsByClassName("slide-text");
        //     for (i = 0; i < x.length; i++) {
        //         x[i].style.display = "none";
        //     }
        //     myIndex++;
        //     if (myIndex > x.length) {myIndex = 1}
        //     x[myIndex-1].style.display = "block";
        // }
        return (
            <div className="main-slider">
                <div className="main-container">
                    <div className="slider">
                        <div className="slider-text">
                            <div className="slide1">
                                <h1>trade with us</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolorem eligendi, et
                                    illo
                                    numquam odio saepe soluta ullam unde voluptates. Dignissimos excepturi maiores
                                    perspiciatis?
                                    Aspernatur dolorem eligendi facere repellendus saepe. Assumenda cumque delectus
                                    dolor
                                    doloremque, eos eum inventore ipsum iste iusto magnam maxime molestias mollitia
                                    nemo,
                                    odit
                                    quidem repellat repellendus rerum saepe sit suscipit. Asperiores atque autem hic
                                    libero
                                    nulla</p>
                            </div>
                        </div>
                        {/*<div className="slider-text">*/}
                        {/*    <div className="slide2">*/}
                        {/*        <h1>forex trading</h1>*/}
                        {/*        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolorem eligendi, et*/}
                        {/*            illo*/}
                        {/*            numquam odio saepe soluta ullam unde voluptates. Dignissimos excepturi maiores*/}
                        {/*            perspiciatis?*/}
                        {/*            Aspernatur dolorem eligendi facere repellendus saepe. Assumenda cumque delectus*/}
                        {/*            dolor*/}
                        {/*            doloremque, eos eum inventore ipsum iste iusto magnam maxime molestias mollitia*/}
                        {/*            nemo,*/}
                        {/*            odit*/}
                        {/*            quidem repellat repellendus rerum saepe sit suscipit. Asperiores atque autem hic*/}
                        {/*            libero*/}
                        {/*            nulla</p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="slider-text">*/}
                        {/*    <div className="slide3">*/}
                        {/*        <h1>join to investor's club</h1>*/}
                        {/*        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolorem eligendi, et*/}
                        {/*            illo*/}
                        {/*            numquam odio saepe soluta ullam unde voluptates. Dignissimos excepturi maiores*/}
                        {/*            perspiciatis?*/}
                        {/*            Aspernatur dolorem eligendi facere repellendus saepe. Assumenda cumque delectus*/}
                        {/*            dolor*/}
                        {/*            doloremque, eos eum inventore ipsum iste iusto magnam maxime molestias mollitia*/}
                        {/*            nemo,*/}
                        {/*            odit*/}
                        {/*            quidem repellat repellendus rerum saepe sit suscipit. Asperiores atque autem hic*/}
                        {/*            libero*/}
                        {/*            nulla</p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        )
    }
}

export default Slider;
