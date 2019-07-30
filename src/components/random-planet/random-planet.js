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

    constructor() {
        super();
        this.updatePlanet();
        setInterval(this.updatePlanet, 5000);
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
                     alt="Planet Image"
                     src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
            </div>
            <div className="d-flex align-items-center">
                <div>
                    <h3>{name}</h3>
                    <table className="table">
                        <tr className="d-flex">
                            <th>Population</th>
                            <td>{population}</td>
                        </tr>
                        <tr className="d-flex">
                            <th>Rotation Period</th>
                            <td>{rotationPeriod}</td>
                        </tr>
                        <tr className="d-flex">
                            <th>Diameter</th>
                            <td>{diameter}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </Fragment>
    )
};