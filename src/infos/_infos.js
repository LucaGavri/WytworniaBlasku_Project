import React, {Component} from "react";
import './_infos.scss';


class Infos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch('https://stocknewsapi.com/api/v1/category?section=general&items=50&token=k32g5v2dbyhepjle0pwolylsj0telifldlnyvtrs')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json.data
                })
            })
    }

    render() {
        var {isLoaded, items} = this.state;

        if (!isLoaded) {
            return <div>loading...</div>
        } else {
            return (
                <div>
                    <div className="infos">
                        <h3 className="infos-head">
                            informacje ze świata
                        </h3>
                        <div className="main-container">
                            <div className="info-section">
                                <div className="info-img">
                                    <img src={items[1].image_url}/>
                                </div>
                                <div className="info-header-and-text">
                                    <div className="info-head">
                                        {console.log(items)}
                                        {items[1].title}
                                    </div>
                                    <div className="info-text">
                                        {items[1].text}
                                    </div>
                                    <div className='btn'>
                                        <a href={items[1].news_url}>
                                            <button>czytaj więcej</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="info-section">
                                <div className="info-img">
                                    <img src={items[3].image_url}/>
                                </div>
                                <div className="info-header-and-text">
                                    <div className="info-head">
                                        {items[3].title}
                                    </div>
                                    <div className="info-text">
                                        {items[3].text}
                                    </div>
                                    <div className='btn'>
                                        <a href={items[3].news_url}>
                                            <button>czytaj więcej</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

// }

export default Infos;
