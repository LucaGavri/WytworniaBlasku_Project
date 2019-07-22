import React, {Component} from "react";
import './_slider.scss';

class Slider extends Component {
    componentDidMount() {
        let myIndex = 0;
        carousel();

        function carousel() {
            let i;
            let x = document.getElementsByClassName("slider-text");
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
                    <div className="slider-text">
                        <div className="slide1">
                            <h1>trade with us</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis eligendi fugiat
                                hic iste maxime nam nostrum officiis optio perspiciatis possimus quas reiciendis
                                repudiandae, sed sequi sit sunt veritatis? Distinctio doloribus esse explicabo
                                fugiat iure magnam neque officia possimus quaerat sunt! Architecto at, doloremque
                                doloribus ea eius error eum expedita facere, iste odio perspiciatis quae sint sit
                                totam ut vitae voluptate. A blanditiis commodi ea enim esse explicabo incidunt
                                laboriosam molestiae mollitia natus numquam quam ratione, rem reprehenderit sit unde
                                vero. Dolorum esse ipsa, optio pariatur qui quis rerum sed temporibus. Ad assumenda
                                deleniti enim eveniet incidunt, ipsa optio reprehenderit voluptate.deleniti enim
                                eveniet incidunt, ipsa optio reprehenderit voluptate.</p>
                        </div>
                    </div>
                    <div className="slider-text">
                        <div className="slide2">
                            <h1>forex trading</h1>
                            <p>Biscuit donut gingerbread cheesecake donut icing fruitcake jelly-o. Lemon drops
                                halvah dragée cake carrot cake tiramisu danish. Marshmallow lemon drops bear claw.
                                Croissant soufflé caramels croissant bonbon cake. Tootsie roll carrot cake croissant
                                liquorice carrot cake toffee carrot cake cookie ice cream. Icing apple pie chocolate
                                liquorice croissant bonbon. Tootsie roll fruitcake croissant cheesecake muffin
                                sesame snaps. Muffin wafer lollipop bonbon donut caramels marzipan jujubes.
                                Cheesecake cake sweet roll bonbon bear claw dessert powder. Biscuit cheesecake apple
                                pie jelly gummi bears icing jelly candy. Pie chocolate bar jelly sugar plum halvah.
                                Ice cream sesame snaps bonbon sweet roll marshmallow jelly powder jelly
                                caramels.</p>
                        </div>
                    </div>
                    <div className="slider-text">
                        <div className="slide3">
                            <h1>join to investor's club</h1>
                            <p>Drogi Marszałku, Wysoka Izbo. PKB rośnie. Różnorakie i unowocześniania form
                                działalności rozszerza nam efekt odpowiednich warunków administracyjno-finansowych.
                                W sumie dokończenie aktualnych projektów wymaga niezwykłej precyzji w przyszłościowe
                                rozwiązania spełnia ważne zadanie w wypracowaniu nowych propozycji. Z drugiej
                                strony, zmiana istniejących kryteriów wymaga niezwykłej precyzji w przygotowaniu i
                                określenia dalszych kierunków postępowego wychowania. Jednakże, zakres i znaczenia
                                tych problemów nie zaś teorię, okazuje się iż dalszy rozwój różnych form
                                oddziaływania. Takowe informacje są tajne, nie zaś teorię, okazuje się wskaźniki...
                                Nikt inny was nie trzeba udowadniać, ponieważ realizacja określonych zadań
                                stanowionych przez organizację.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Slider;
