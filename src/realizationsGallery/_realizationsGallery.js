import React, {Component} from "react";
import './_realizationsGallery.scss';
import gallery1 from './../images/gallery1.jpg';
import gallery2 from './../images/gallery2.jpg';
import gallery3 from './../images/gallery3.jpg';
import gallery4 from './../images/gallery4.jpg';
import gallery5 from './../images/gallery5.jpg';
import gallery6 from './../images/gallery6.jpg';
import gallery7 from './../images/gallery7.jpg';
import gallery8 from './../images/gallery8.jpg';
import gallery9 from './../images/gallery9.jpg';
import gallery10 from './../images/gallery10.jpg';
import gallery11 from './../images/gallery11.jpg';
import gallery12 from './../images/gallery12.jpg';


class RealizationsGallery extends Component {
    componentDidMount() {

        //obrazki smallGallery
        const smallGallery1 = document.querySelector(".smallGallery1");
        const smallGallery2 = document.querySelector(".smallGallery2");
        const smallGallery3 = document.querySelector(".smallGallery3");
        const smallGallery4 = document.querySelector(".smallGallery4");
        const smallGallery5 = document.querySelector(".smallGallery5");
        const smallGallery6 = document.querySelector(".smallGallery6");
        const smallGallery7 = document.querySelector(".smallGallery7");
        const smallGallery8 = document.querySelector(".smallGallery8");
        const smallGallery9 = document.querySelector(".smallGallery9");
        const smallGallery10 = document.querySelector(".smallGallery10");
        const smallGallery11 = document.querySelector(".smallGallery11");
        const smallGallery12 = document.querySelector(".smallGallery12");

        //obrazki bigGallery
        const bigGallery1 = document.querySelector(".bigGallery1");
        const bigGallery2 = document.querySelector(".bigGallery2");
        const bigGallery3 = document.querySelector(".bigGallery3");
        const bigGallery4 = document.querySelector(".bigGallery4");
        const bigGallery5 = document.querySelector(".bigGallery5");
        const bigGallery6 = document.querySelector(".bigGallery6");
        const bigGallery7 = document.querySelector(".bigGallery7");
        const bigGallery8 = document.querySelector(".bigGallery8");
        const bigGallery9 = document.querySelector(".bigGallery9");
        const bigGallery10 = document.querySelector(".bigGallery10");
        const bigGallery11 = document.querySelector(".bigGallery11");
        const bigGallery12 = document.querySelector(".bigGallery12");

        //krzyżyki bigGallery
        const crossBigGallery1 = document.querySelector(".bigGallery1>.cross");
        const crossBigGallery2 = document.querySelector(".bigGallery2>.cross");
        const crossBigGallery3 = document.querySelector(".bigGallery3>.cross");
        const crossBigGallery4 = document.querySelector(".bigGallery4>.cross");
        const crossBigGallery5 = document.querySelector(".bigGallery5>.cross");
        const crossBigGallery6 = document.querySelector(".bigGallery6>.cross");
        const crossBigGallery7 = document.querySelector(".bigGallery7>.cross");
        const crossBigGallery8 = document.querySelector(".bigGallery8>.cross");
        const crossBigGallery9 = document.querySelector(".bigGallery9>.cross");
        const crossBigGallery10 = document.querySelector(".bigGallery10>.cross");
        const crossBigGallery11 = document.querySelector(".bigGallery11>.cross");
        const crossBigGallery12 = document.querySelector(".bigGallery12>.cross");

        //przyciski next
        const nextBigGallery1 = document.querySelector(".bigGallery1>.next");
        const nextBigGallery2 = document.querySelector(".bigGallery2>.next");
        const nextBigGallery3 = document.querySelector(".bigGallery3>.next");
        const nextBigGallery4 = document.querySelector(".bigGallery4>.next");
        const nextBigGallery5 = document.querySelector(".bigGallery5>.next");
        const nextBigGallery6 = document.querySelector(".bigGallery6>.next");
        const nextBigGallery7 = document.querySelector(".bigGallery7>.next");
        const nextBigGallery8 = document.querySelector(".bigGallery8>.next");
        const nextBigGallery9 = document.querySelector(".bigGallery9>.next");
        const nextBigGallery10 = document.querySelector(".bigGallery10>.next");
        const nextBigGallery11 = document.querySelector(".bigGallery11>.next");
        const nextBigGallery12 = document.querySelector(".bigGallery12>.next");

        //przyciski prev
        const prevBigGallery1 = document.querySelector(".bigGallery1>.prev");
        const prevBigGallery2 = document.querySelector(".bigGallery2>.prev");
        const prevBigGallery3 = document.querySelector(".bigGallery3>.prev");
        const prevBigGallery4 = document.querySelector(".bigGallery4>.prev");
        const prevBigGallery5 = document.querySelector(".bigGallery5>.prev");
        const prevBigGallery6 = document.querySelector(".bigGallery6>.prev");
        const prevBigGallery7 = document.querySelector(".bigGallery7>.prev");
        const prevBigGallery8 = document.querySelector(".bigGallery8>.prev");
        const prevBigGallery9 = document.querySelector(".bigGallery9>.prev");
        const prevBigGallery10 = document.querySelector(".bigGallery10>.prev");
        const prevBigGallery11 = document.querySelector(".bigGallery11>.prev");
        const prevBigGallery12 = document.querySelector(".bigGallery12>.prev");



        //klik z małego wywołuje duże zdj
        smallGallery1.addEventListener("click", function (e) {
            (e).preventDefault();
            bigGallery1.style.display="flex";
            bigGallery2.style.display="none";
            bigGallery3.style.display="none";
            bigGallery4.style.display="none";
            bigGallery5.style.display="none";
            bigGallery6.style.display="none";
            bigGallery7.style.display="none";
            bigGallery8.style.display="none";
            bigGallery9.style.display="none";
            bigGallery10.style.display="none";
            bigGallery11.style.display="none";
            bigGallery12.style.display="none";
        });
        smallGallery2.addEventListener("click", function (e) {
            (e).preventDefault();
            bigGallery1.style.display="none";
            bigGallery2.style.display="flex";
            bigGallery3.style.display="none";
            bigGallery4.style.display="none";
            bigGallery5.style.display="none";
            bigGallery6.style.display="none";
            bigGallery7.style.display="none";
            bigGallery8.style.display="none";
            bigGallery9.style.display="none";
            bigGallery10.style.display="none";
            bigGallery11.style.display="none";
            bigGallery12.style.display="none";
        });
        smallGallery3.addEventListener("click", function (e) {
            (e).preventDefault();
            bigGallery1.style.display="none";
            bigGallery2.style.display="none";
            bigGallery3.style.display="flex";
            bigGallery4.style.display="none";
            bigGallery5.style.display="none";
            bigGallery6.style.display="none";
            bigGallery7.style.display="none";
            bigGallery8.style.display="none";
            bigGallery9.style.display="none";
            bigGallery10.style.display="none";
            bigGallery11.style.display="none";
            bigGallery12.style.display="none";
        });
        smallGallery4.addEventListener("click", function (e) {
            (e).preventDefault();
            bigGallery1.style.display="none";
            bigGallery2.style.display="none";
            bigGallery3.style.display="none";
            bigGallery4.style.display="flex";
            bigGallery5.style.display="none";
            bigGallery6.style.display="none";
            bigGallery7.style.display="none";
            bigGallery8.style.display="none";
            bigGallery9.style.display="none";
            bigGallery10.style.display="none";
            bigGallery11.style.display="none";
            bigGallery12.style.display="none";
        });
        smallGallery5.addEventListener("click", function (e) {
            (e).preventDefault();
            bigGallery1.style.display="none";
            bigGallery2.style.display="none";
            bigGallery3.style.display="none";
            bigGallery4.style.display="none";
            bigGallery5.style.display="flex";
            bigGallery6.style.display="none";
            bigGallery7.style.display="none";
            bigGallery8.style.display="none";
            bigGallery9.style.display="none";
            bigGallery10.style.display="none";
            bigGallery11.style.display="none";
            bigGallery12.style.display="none";
        });
        smallGallery6.addEventListener("click", function (e) {
            (e).preventDefault();
            bigGallery1.style.display="none";
            bigGallery2.style.display="none";
            bigGallery3.style.display="none";
            bigGallery4.style.display="none";
            bigGallery5.style.display="none";
            bigGallery6.style.display="flex";
            bigGallery7.style.display="none";
            bigGallery8.style.display="none";
            bigGallery9.style.display="none";
            bigGallery10.style.display="none";
            bigGallery11.style.display="none";
            bigGallery12.style.display="none";
        });
        smallGallery7.addEventListener("click", function (e) {
            (e).preventDefault();
            bigGallery1.style.display="none";
            bigGallery2.style.display="none";
            bigGallery3.style.display="none";
            bigGallery4.style.display="none";
            bigGallery5.style.display="none";
            bigGallery6.style.display="none";
            bigGallery7.style.display="flex";
            bigGallery8.style.display="none";
            bigGallery9.style.display="none";
            bigGallery10.style.display="none";
            bigGallery11.style.display="none";
            bigGallery12.style.display="none";
        });
        smallGallery8.addEventListener("click", function (e) {
            (e).preventDefault();
            bigGallery1.style.display="none";
            bigGallery2.style.display="none";
            bigGallery3.style.display="none";
            bigGallery4.style.display="none";
            bigGallery5.style.display="none";
            bigGallery6.style.display="none";
            bigGallery7.style.display="none";
            bigGallery8.style.display="flex";
            bigGallery9.style.display="none";
            bigGallery10.style.display="none";
            bigGallery11.style.display="none";
            bigGallery12.style.display="none";
        });
        smallGallery9.addEventListener("click", function (e) {
            (e).preventDefault();
            bigGallery1.style.display="none";
            bigGallery2.style.display="none";
            bigGallery3.style.display="none";
            bigGallery4.style.display="none";
            bigGallery5.style.display="none";
            bigGallery6.style.display="none";
            bigGallery7.style.display="none";
            bigGallery8.style.display="none";
            bigGallery9.style.display="flex";
            bigGallery10.style.display="none";
            bigGallery11.style.display="none";
            bigGallery12.style.display="none";
        });
        smallGallery10.addEventListener("click", function (e) {
            (e).preventDefault();
            bigGallery1.style.display="none";
            bigGallery2.style.display="none";
            bigGallery3.style.display="none";
            bigGallery4.style.display="none";
            bigGallery5.style.display="none";
            bigGallery6.style.display="none";
            bigGallery7.style.display="none";
            bigGallery8.style.display="none";
            bigGallery9.style.display="none";
            bigGallery10.style.display="flex";
            bigGallery11.style.display="none";
            bigGallery12.style.display="none";
        });
        smallGallery11.addEventListener("click", function (e) {
            (e).preventDefault();
            bigGallery1.style.display="none";
            bigGallery2.style.display="none";
            bigGallery3.style.display="none";
            bigGallery4.style.display="none";
            bigGallery5.style.display="none";
            bigGallery6.style.display="none";
            bigGallery7.style.display="none";
            bigGallery8.style.display="none";
            bigGallery9.style.display="none";
            bigGallery10.style.display="none";
            bigGallery11.style.display="flex";
            bigGallery12.style.display="none";
        });
        smallGallery12.addEventListener("click", function (e) {
            (e).preventDefault();
            bigGallery1.style.display="none";
            bigGallery2.style.display="none";
            bigGallery3.style.display="none";
            bigGallery4.style.display="none";
            bigGallery5.style.display="none";
            bigGallery6.style.display="none";
            bigGallery7.style.display="none";
            bigGallery8.style.display="none";
            bigGallery9.style.display="none";
            bigGallery10.style.display="none";
            bigGallery11.style.display="none";
            bigGallery12.style.display="flex";
        });

        //zamykanie bigGallery
        crossBigGallery1.addEventListener("click", function (e) {
            (e).preventDefault();
            bigGallery1.style.display="none";
        });
        crossBigGallery2.addEventListener("click", function (e) {
            (e).preventDefault();
            bigGallery2.style.display="none";
        });
        crossBigGallery3.addEventListener("click", function (e) {
            (e).preventDefault();
            bigGallery3.style.display="none";
        });
        crossBigGallery4.addEventListener("click", function (e) {
            (e).preventDefault();
            bigGallery4.style.display="none";
        });
        crossBigGallery5.addEventListener("click", function (e) {
            (e).preventDefault();
            bigGallery5.style.display="none";
        });
        crossBigGallery6.addEventListener("click", function (e) {
            (e).preventDefault();
            bigGallery6.style.display="none";
        });
        crossBigGallery7.addEventListener("click", function (e) {
            (e).preventDefault();
            bigGallery7.style.display="none";
        });
        crossBigGallery8.addEventListener("click", function (e) {
            (e).preventDefault();
            bigGallery8.style.display="none";
        });
        crossBigGallery9.addEventListener("click", function (e) {
            (e).preventDefault();
            bigGallery9.style.display="none";
        });
        crossBigGallery10.addEventListener("click", function (e) {
            (e).preventDefault();
            bigGallery10.style.display="none";
        });
        crossBigGallery11.addEventListener("click", function (e) {
            (e).preventDefault();
            bigGallery11.style.display="none";
        });
        crossBigGallery12.addEventListener("click", function (e) {
            (e).preventDefault();
            bigGallery12.style.display="none";
        });

        //nastepny obrazek w bigGallery
        nextBigGallery1.addEventListener("click", function (e) {
            (e).preventDefault();
            bigGallery1.style.display="none";
            bigGallery2.style.display="flex";
        });
        nextBigGallery2.addEventListener("click", function (e) {
            (e).preventDefault();
            bigGallery2.style.display="none";
            bigGallery3.style.display="flex";
        });
        nextBigGallery3.addEventListener("click", function (e) {
            (e).preventDefault();
            bigGallery3.style.display="none";
            bigGallery4.style.display="flex";
        });
        nextBigGallery4.addEventListener("click", function (e) {
            (e).preventDefault();
            bigGallery4.style.display="none";
            bigGallery5.style.display="flex";
        });
        nextBigGallery5.addEventListener("click", function (e) {
            (e).preventDefault();
            bigGallery5.style.display="none";
            bigGallery6.style.display="flex";
        });
        nextBigGallery6.addEventListener("click", function (e) {
            (e).preventDefault();
            bigGallery6.style.display="none";
            bigGallery7.style.display="flex";
        });
        nextBigGallery7.addEventListener("click", function (e) {
            (e).preventDefault();
            bigGallery7.style.display="none";
            bigGallery8.style.display="flex";
        });
        nextBigGallery8.addEventListener("click", function (e) {
            (e).preventDefault();
            bigGallery8.style.display="none";
            bigGallery9.style.display="flex";
        });
        nextBigGallery9.addEventListener("click", function (e) {
            (e).preventDefault();
            bigGallery9.style.display="none";
            bigGallery10.style.display="flex";
        });
        nextBigGallery10.addEventListener("click", function (e) {
            (e).preventDefault();
            bigGallery10.style.display="none";
            bigGallery11.style.display="flex";
        });
        nextBigGallery11.addEventListener("click", function (e) {
            (e).preventDefault();
            bigGallery11.style.display="none";
            bigGallery12.style.display="flex";
        });
        nextBigGallery12.addEventListener("click", function (e) {
            (e).preventDefault();
            bigGallery12.style.display="none";
            bigGallery1.style.display="flex";
        });

        //poprzedni obrazek w bigGallery
        prevBigGallery1.addEventListener("click", function (e) {
            (e).preventDefault();
            bigGallery1.style.display="none";
            bigGallery12.style.display="flex";
        });
        prevBigGallery2.addEventListener("click", function (e) {
            (e).preventDefault();
            bigGallery2.style.display="none";
            bigGallery1.style.display="flex";
        });
        prevBigGallery3.addEventListener("click", function (e) {
            (e).preventDefault();
            bigGallery3.style.display="none";
            bigGallery2.style.display="flex";
        });
        prevBigGallery4.addEventListener("click", function (e) {
            (e).preventDefault();
            bigGallery4.style.display="none";
            bigGallery3.style.display="flex";
        });
        prevBigGallery5.addEventListener("click", function (e) {
            (e).preventDefault();
            bigGallery5.style.display="none";
            bigGallery4.style.display="flex";
        });
        prevBigGallery6.addEventListener("click", function (e) {
            (e).preventDefault();
            bigGallery6.style.display="none";
            bigGallery5.style.display="flex";
        });
        prevBigGallery7.addEventListener("click", function (e) {
            (e).preventDefault();
            bigGallery7.style.display="none";
            bigGallery6.style.display="flex";
        });
        prevBigGallery8.addEventListener("click", function (e) {
            (e).preventDefault();
            bigGallery8.style.display="none";
            bigGallery7.style.display="flex";
        });
        prevBigGallery9.addEventListener("click", function (e) {
            (e).preventDefault();
            bigGallery9.style.display="none";
            bigGallery8.style.display="flex";
        });
        prevBigGallery10.addEventListener("click", function (e) {
            (e).preventDefault();
            bigGallery10.style.display="none";
            bigGallery9.style.display="flex";
        });
        prevBigGallery11.addEventListener("click", function (e) {
            (e).preventDefault();
            bigGallery11.style.display="none";
            bigGallery10.style.display="flex";
        });
        prevBigGallery12.addEventListener("click", function (e) {
            (e).preventDefault();
            bigGallery12.style.display="none";
            bigGallery11.style.display="flex";
        });
    }

    render() {
        return (
            <div className="realizationsGallery">
                <div className="bigGallery1">
                    <i className="far fa-arrow-alt-circle-left prev"></i>
                    <img src={gallery1} alt="wytwórnia blasku gallery1"/>
                    <i className="far fa-times-circle cross"></i>
                    <i className="far fa-arrow-alt-circle-right next"></i>
                </div>
                <div className="bigGallery2">
                    <i className="far fa-arrow-alt-circle-left prev"></i>
                    <img src={gallery2} alt="wytwórnia blasku gallery2"/>
                    <i className="far fa-times-circle cross"></i>
                    <i className="far fa-arrow-alt-circle-right next"></i>
                </div>
                <div className="bigGallery3">
                    <i className="far fa-arrow-alt-circle-left prev"></i>
                    <img src={gallery3} alt="wytwórnia blasku gallery3"/>
                    <i className="far fa-times-circle cross"></i>
                    <i className="far fa-arrow-alt-circle-right next"></i>
                </div>
                <div className="bigGallery4">
                    <i className="far fa-arrow-alt-circle-left prev"></i>
                    <img src={gallery4} alt="wytwórnia blasku gallery4"/>
                    <i className="far fa-times-circle cross"></i>
                    <i className="far fa-arrow-alt-circle-right next"></i>
                </div>
                <div className="bigGallery5">
                    <i className="far fa-arrow-alt-circle-left prev"></i>
                    <img src={gallery5} alt="wytwórnia blasku gallery5"/>
                    <i className="far fa-times-circle cross"></i>
                    <i className="far fa-arrow-alt-circle-right next"></i>
                </div>
                <div className="bigGallery6">
                    <i className="far fa-arrow-alt-circle-left prev"></i>
                    <img src={gallery6} alt="wytwórnia blasku gallery6"/>
                    <i className="far fa-times-circle cross"></i>
                    <i className="far fa-arrow-alt-circle-right next"></i>
                </div>
                <div className="bigGallery7">
                    <i className="far fa-arrow-alt-circle-left prev"></i>
                    <img src={gallery7} alt="wytwórnia blasku gallery7"/>
                    <i className="far fa-times-circle cross"></i>
                    <i className="far fa-arrow-alt-circle-right next"></i>
                </div>
                <div className="bigGallery8">
                    <i className="far fa-arrow-alt-circle-left prev"></i>
                    <img src={gallery8} alt="wytwórnia blasku gallery8"/>
                    <i className="far fa-times-circle cross"></i>
                    <i className="far fa-arrow-alt-circle-right next"></i>
                </div>
                <div className="bigGallery9">
                    <i className="far fa-arrow-alt-circle-left prev"></i>
                    <img src={gallery9} alt="wytwórnia blasku gallery9"/>
                    <i className="far fa-times-circle cross"></i>
                    <i className="far fa-arrow-alt-circle-right next"></i>
                </div>
                <div className="bigGallery10">
                    <i className="far fa-arrow-alt-circle-left prev"></i>
                    <img src={gallery10} alt="wytwórnia blasku gallery10"/>
                    <i className="far fa-times-circle cross"></i>
                    <i className="far fa-arrow-alt-circle-right next"></i>
                </div>
                <div className="bigGallery11">
                    <i className="far fa-arrow-alt-circle-left prev"></i>
                    <img src={gallery11} alt="wytwórnia blasku gallery11"/>
                    <i className="far fa-times-circle cross"></i>
                    <i className="far fa-arrow-alt-circle-right next"></i>
                </div>
                <div className="bigGallery12">
                    <i className="far fa-arrow-alt-circle-left prev"></i>
                    <img src={gallery12} alt="wytwórnia blasku gallery12"/>
                    <i className="far fa-times-circle cross"></i>
                    <i className="far fa-arrow-alt-circle-right next"></i>
                </div>


                <div className="smallGallery">
                    <img className="smallGallery1" src={gallery1} alt="wytwórnia blasku gallery1"/>
                    <img className="smallGallery2" src={gallery2} alt="wytwórnia blasku gallery2"/>
                    <img className="smallGallery3" src={gallery3} alt="wytwórnia blasku gallery3"/>
                    <img className="smallGallery4" src={gallery4} alt="wytwórnia blasku gallery4"/>
                    <img className="smallGallery5" src={gallery5} alt="wytwórnia blasku gallery5"/>
                    <img className="smallGallery6" src={gallery6} alt="wytwórnia blasku gallery6"/>
                    <img className="smallGallery7" src={gallery7} alt="wytwórnia blasku gallery7"/>
                    <img className="smallGallery8" src={gallery8} alt="wytwórnia blasku gallery8"/>
                    <img className="smallGallery9" src={gallery9} alt="wytwórnia blasku gallery9"/>
                    <img className="smallGallery10" src={gallery10} alt="wytwórnia blasku gallery10"/>
                    <img className="smallGallery11" src={gallery11} alt="wytwórnia blasku gallery11"/>
                    <img className="smallGallery12" src={gallery12} alt="wytwórnia blasku gallery12"/>
                </div>
            </div>
        )
    }
}

export default RealizationsGallery;
