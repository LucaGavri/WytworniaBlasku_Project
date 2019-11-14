import React, {Component} from "react";
import './_ofert.scss';


class Ofert extends Component {
    render() {
        return (
                <div className="ofert">
                    <div className="ofert1">
                        <div className="ofertMain">
                            <h3>Oferta</h3>
                            <div className="ofertAll">
                                <div className="ofertTxt">
                                    <h3>
                                        Laminowanie lakieru
                                    </h3>
                                    <p> Pragniesz zabezpieczyć lakier swojego samochodu najlepszym możliwym sposobem
                                        jaki
                                        istnieje?
                                        Zapraszamy! Folie ochronne oraz powłoki ceramiczne to możliwie najlepszy jak do
                                        tej pory
                                        wybór.</p>
                                </div>
                                <div className="ofertPrice">
                                    <p>od 30,00zł</p>
                                </div>
                            </div>
                            <div className="ofertAll">
                                <div className="ofertTxt">
                                    <h3>
                                        Przyciemnianie szyb

                                    </h3>
                                    <p> Korzyści z instalacji folii
                                        -Utrzymują chłód wewnątrz samochodu nawet w najgorętsze dni (blokują do 70%
                                        energii
                                        słonecznej)
                                        - Zwiększają bezpieczeństwo
                                        - Redukują refleksy</p>
                                </div>
                                <div className="ofertPrice">
                                    <p>od 30,00zł</p>
                                </div>
                            </div>
                            <div className="ofertAll">
                                <div className="ofertTxt">
                                    <h3>
                                        Pranie tapicerki / Czyszczenie skór
                                    </h3>
                                    <p> Usługa czyszczenia tapicerki samochodowej, w skład której wchodzi pranie foteli,
                                        podłogi
                                        , podsufitki oraz innych elementów materiałowych</p>
                                </div>
                                <div className="ofertPrice">
                                    <p>od 30,00zł</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        )
    }
}

export default Ofert;
