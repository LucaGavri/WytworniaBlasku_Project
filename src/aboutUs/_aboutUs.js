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
                        usług na najwyższym poziomie, z dbałością o każdy szczegół, przy wykorzystaniu nowoczesnego
                        sprzętu oraz
                        produktów znanych i cenionych marek.<br/>W ofercie Wytwórni Blasku, poza podstawowymi usługami
                        pielęgnacji pojazdów, znajdziecie Państwo wiele dodatkowych usług m.in.:
                        <ul>
                            <li>przyciemnianie szyb</li>
                            <li>przygotowanie aut do sprzedaży</li>
                            <li>czyszczenie i konserwacja skóry</li>
                            <li>renowacja i naprawa skórzanych tapicerek</li>
                            <li>pranie wnętrza auta</li>
                            <li>mycie komory silnika</li>
                            <li>ozonowanie</li>
                            <li>korekty lakieru oraz powłoki zabezpieczające na lakier i inne
                                elementy nadwozia (szyby, elementy plastikowe, reflektory)
                            </li>
                        </ul>
                    </p>
                    <p>
                        Oprócz miłości do samochodów i ich detailingu zapewniamy pełen profesjonalizm w opiece nad
                        wszystkimi pojazdami - od motocykli po łodzie czy samoloty. </p>
                    <p> Posiadany sprzęt pozwala nam również na prowadzenie innych usług, z którymi mogą się państwo
                        zapoznać w zakładce - <a className="aboutToOfert" href="#">Oferta</a>.</p>
                </div>
            </div>

        )
    }
}

export default AboutUs;
