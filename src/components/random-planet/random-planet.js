import React, {Component, Fragment} from 'react';

import SwapiService from '../../services/swapi-service';

import './random-planet.css';
import Spinner from '../spinner';
import ErrorIndicator from "../error-indicator";

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true
    };

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false,
            error: false
        })
    };

    onError = () => {
        this.setState({
            error: true,
            loading: false
        });
    };

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 12) + 3;
        this.swapiService.getPlanet(id).then(this.onPlanetLoaded).catch(this.onError);
    };

    render() {
        const { planet, loading, error } = this.state;

        const hasData = !(loading || error);

        const errorMessage = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <div className="d-flex align-items-center m-auto"><Spinner/></div> : null;
        const content = hasData ? <PlanetView planet={planet}/> : null;

        return (
            <nav className="random-planet">
                <div className="card">
                    <div className="d-flex">
                        {errorMessage}
                        {spinner}
                        {content}
                    </div>
                </div>
            </nav>
        )
    }
};

const PlanetView = ({ planet }) => {

    const { id, name, population, rotationPeriod, diameter } = planet;

    return (
        <Fragment>
            <div>
                <img className="card-img m-3 rounded-lg"
                     alt="Planet from Star Wars"
                     src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
            </div>
            <div className="d-flex align-items-center">
                <div>
                    <h3>{name}</h3>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <span className="mr-2">Population:</span>
                            <span>{population}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="mr-2">Rotation Period:</span>
                            <span>{rotationPeriod}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="mr-2">Diameter:</span>
                            <span>{diameter}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </Fragment>
    )
};