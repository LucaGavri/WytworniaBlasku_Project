import React, {Component} from "react";
import './_aboutUs.scss';


class AboutUs extends Component {
    render() {
        return (
            <div className="aboutUs">
                <div className="about">
                    <h3>
                        Wytwórnia Blasku Detailing &amp; Wrap
                    </h3>
                    <p> Wytwórnia Blasku - profesjonalny autodetailing i myjnia samochodowa, zapewniająca wykonanie
                        usług na
                        najwyższym poziomie, z dbałością o każdy szczegół, przy wykorzystaniu nowoczesnego sprzętu oraz
                        produktów znanych i cenionych marek. W ofercie Wytwórni Blasku, poza podstawowymi usługami
                        pielęgnacji, znajdziecie Państwo wiele dodatkowych usług m.in.: przyciemnianie szyb, przygotowanie aut do sprzedaży,
                        czyszczenie i konserwacja skóry, renowacja i naprawa skórzanych tapicerek, pranie wnętrza auta,
                        mycie komory silnika, ozonowanie, korekty lakieru oraz powłoki zabezpieczające na lakier i inne
                        elementy nadwozia (szyby, elementy plastikowe, reflektory).</p>
                    <p>
                        Oprócz miłości do samochodów i ich detailingu zapewniamy pełen profesjonalizm w opiece nad
                        wszystkimi waszymi pojazdami od motocykli po łodzie czy samoloty. </p>
                    <p> Posiadany sprzęt pozwala nam
                        również na prowadzenie innych usług, do których zapraszamy w zakładce <a href="#">Oferta</a>.</p>

                </div>
            </div>

        )
    }
}

export default AboutUs;
