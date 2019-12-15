import React, {Component} from 'react';
import './App.css';
import './App.scss';
import Header from "./header/_header";
import Slider from "./slider/_slider";
import Footer from "./footer/_footer";
import Copyright from "./copyright/_copyright";
import AboutUs from "./aboutUs/_aboutUs";
import Ofert from "./ofert/_ofert";
import Realizations from "./realizations/_realizations";
import Contact from "./contact/_contact";

class App extends Component {
    componentDidMount() {

        //pokazanie btn'a strzałki w gore
        window.onscroll = function () {
            scrollFunction()
        };

        function scrollFunction() {
            if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
                document.querySelector(".scrollUp").style.display = "block";
            } else {
                document.querySelector(".scrollUp").style.display = "none";
            }
        }

        //przesuwanie w gore z btn'a strzałki w gore
        document.querySelector(".scrollUp").addEventListener("click", function (e) {
            (e).preventDefault();
            document.querySelector('.page').scrollIntoView({
                block: "start",
                inline: "nearest",
                behavior: "smooth"
            });
        });

        //cookies info
        //znikanie minicookies btn ok
        document.querySelector('.cookiesMiniBtn').addEventListener("click", function (e) {
            (e).preventDefault();
            document.querySelector('.cookiesMiniInfo').style.display = "none";
        });
        //klik tutaj - pojawienie maxicookies znikniecie minicookies i scroll up
        document.querySelector('.cookiesMore').addEventListener("click", function (e) {
            (e).preventDefault();
            document.querySelector('.cookiesMaxiInfo').style.display = "flex";
            document.querySelector('.cookiesMiniInfo').style.display = "none";
            document.querySelector('.page').scrollIntoView({
                block: "start",
                inline: "nearest",
            });
        });
        //zamykanie maxicookies
        document.querySelector('.cookiesCross').addEventListener("click", function (e) {
            (e).preventDefault();
            document.querySelector('.cookiesMaxiInfo').style.display = "none";
        });

        //akcja przycisków nawigacji i footera
        const logoClick = document.querySelector(".logo");
        const slider = document.querySelector(".main-slider");
        const aboutUsClick = document.querySelector(".aboutUsClick");
        const ofertClick = document.querySelector(".ofertClick");
        const realizationsClick = document.querySelector(".realizationsClick");
        const contactClick = document.querySelector(".contactClick");
        const about = document.querySelector(".aboutUs");
        const ofert = document.querySelector(".ofert");
        const realizations = document.querySelector(".realizations");
        const contact = document.querySelector(".contact");
        const aboutToOfert = document.querySelector(".aboutToOfert");
        const ofertToContact = document.querySelector(".ofertToContact");

        //logo - strona glowna
        logoClick.addEventListener("click", function (e) {
            (e).preventDefault();
            //wyswietlanie komponentu i zwijanie innych
            about.style.display = "none";
            ofert.style.display = "none";
            realizations.style.display = "none";
            contact.style.display = "none";
            slider.style.display = "flex";

            //deaktywacja navi
            aboutUsClick.classList.remove("active");
            ofertClick.classList.remove("active");
            realizationsClick.classList.remove("active");
            contactClick.classList.remove("active");

            //przewijanie do top
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });

        //o nas
        aboutUsClick.addEventListener("click", function (e) {
            (e).preventDefault();
            //wyswietlanie komponentu i zwijanie innych
            slider.style.display = "none";
            ofert.style.display = "none";
            realizations.style.display = "none";
            contact.style.display = "none";
            about.style.display = "flex";

            //aktywacja przycisku w navi i deaktywacja innych
            aboutUsClick.classList.add("active");
            ofertClick.classList.remove("active");
            realizationsClick.classList.remove("active");
            contactClick.classList.remove("active");

            //przewijanie do top
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });

        //oferta
        ofertClick.addEventListener("click", function (e) {
            (e).preventDefault();
            //wyswietlanie komponentu i zwijanie innych
            about.style.display = "none";
            slider.style.display = "none";
            realizations.style.display = "none";
            contact.style.display = "none";
            ofert.style.display = "flex";

            //aktywacja przycisku w navi i deaktywacja innych
            ofertClick.classList.add("active");
            aboutUsClick.classList.remove("active");
            realizationsClick.classList.remove("active");
            contactClick.classList.remove("active");

            //przewijanie do top
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });

        //realizacje
        realizationsClick.addEventListener("click", function (e) {
            (e).preventDefault();
            //wyswietlanie komponentu i zwijanie innych
            about.style.display = "none";
            slider.style.display = "none";
            ofert.style.display = "none";
            contact.style.display = "none";
            realizations.style.display = "flex";

            //aktywacja przycisku w navi i deaktywacja innych
            realizationsClick.classList.add("active");
            ofertClick.classList.remove("active");
            aboutUsClick.classList.remove("active");
            contactClick.classList.remove("active");

            //przewijanie do top
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });

        //kontakt
        contactClick.addEventListener("click", function (e) {
            (e).preventDefault();
            //wyswietlanie komponentu i zwijanie innych
            slider.style.display = "none";
            ofert.style.display = "none";
            realizations.style.display = "none";
            about.style.display = "none";
            contact.style.display = "flex";

            //aktywacja przycisku w navi i deaktywacja innych
            contactClick.classList.add("active");
            ofertClick.classList.remove("active");
            realizationsClick.classList.remove("active");
            aboutUsClick.classList.remove("active");

            //przewijanie do top
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });

        //z o nas do oferty (na dole txtu)
        aboutToOfert.addEventListener("click", function (e) {
            (e).preventDefault();
            //wyswietlanie komponentu i zwijanie innych
            about.style.display = "none";
            slider.style.display = "none";
            realizations.style.display = "none";
            contact.style.display = "none";
            ofert.style.display = "flex";

            //aktywacja przycisku w navi i deaktywacja innych
            ofertClick.classList.add("active");
            aboutUsClick.classList.remove("active");
            realizationsClick.classList.remove("active");
            contactClick.classList.remove("active");

            //przewijanie do top
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });

        //z ofert do contact (na dole txtu)
        ofertToContact.addEventListener("click", function (e) {
            (e).preventDefault();
            //wyswietlanie komponentu i zwijanie innych
            about.style.display = "none";
            slider.style.display = "none";
            realizations.style.display = "none";
            ofert.style.display = "none";
            contact.style.display = "flex";

            //aktywacja przycisku w navi i deaktywacja innych
            contactClick.classList.add("active");
            aboutUsClick.classList.remove("active");
            realizationsClick.classList.remove("active");
            ofertClick.classList.remove("active");

            //przewijanie do top
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });

    }

    render() {
        return (
            <div className="app">
                <div className="page">
                    <Header/>
                    <Slider/>
                    <AboutUs/>
                    <Ofert/>
                    <Realizations/>
                    <Contact/>
                    <Footer/>
                    <Copyright/>
                    <div className="cookiesMiniInfo">
                        <p>
                            Ta strona wykorzystuje bezpieczne pliki cookies, które są potrzebne do odpowiedniego
                            działania serwisu. Informacje o plikach oraz jak je wyłączyć znajdziesz <a
                            className="cookiesMore" href="#">tutaj</a>.
                        </p>
                        <button className="cookiesMiniBtn">OK</button>
                    </div>
                    <div className="cookiesMaxiInfo">
                        <p>
                            POLITYKA PRYWATNOŚĆI<br/><br/>

                            PLIKI COOKIES<br/>
                            Na urządzeniu użytkownika zapisywane są bezpieczne pliki Cookies.<br/><br/>

                            Użytkownik ma możliwość wyłączenia lub ograniczenia plików Cookies na jego urządzeniu.
                            Niestety strona wytwórniablasku.pl nie będzie funkcjonować poprawnie.<br/>

                            Pliki Cookie zapisywane są na potrzeby zapewnienia poprawnego działania skryptów systemu
                            serwisu oraz zapewnienia bezpieczeństwa korzystania z naszej strony.<br/><br/>

                            WYŁĄCZANIE COOKIES<br/>
                            Poniżej przykładowa instrukcja dla popularnej przeglądarki Chrome:<br/>
                            W górnej części okna należy kliknąć przycisk "Więcej"(trzy kropki) i przejść do zakładki
                            "Ustawienia". Następnie na dole okna kliknąć "Zaawansowane". W sekcji „Prywatność i
                            bezpieczeństwo” wejść w "Ustawienia witryn". Kliknąć "Pliki Cookie". W tym miejscu można
                            włączyć lub wyłączyć pliki cookie.
                        </p>
                        <i className="far fa-times-circle cookiesCross"></i>
                    </div>
                    <div className="scrollUp">
                        <i className="fas fa-angle-up"></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
