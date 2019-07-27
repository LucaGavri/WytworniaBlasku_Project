import React, {Component} from "react";
import './_header.scss';


class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-text">
                    <h1 className="header-title">
                        Cześć! Nazywam się Łukasz
                    </h1>
                    <p className="header-about">
                        Jestem absolwentem kursu 'Front-End Developer: React' w szkole
                        Coders Lab. W codziennej pracy potrafię być dokładny, skupiony oraz
                        dążę do realizacji zadań w 100 procentach. Kilka lat doświadczenia w
                        sprzedaży nauczyły mnie pracy zarówno indywidualnej jak i
                        zespołowej.
                        Obecnie poszukuję pracy, która pozwoli mi zdobyć doświadczenie
                        oraz rozwinąć umiejętności w technologiach Front-end.
                    </p>
                </div>
            </div>

        )
    }
}

export default Header;

