import React, {Component} from 'react';

import SwapiService from '../../services/swapi-service';

import './random-planet.css';
import Spinner from '../spinner';

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        planet: {}
    };

    constructor() {
        super();
        this.updatePlanet();
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet
        })
    };

    updatePlanet() {
        const id = 12;
        this.swapiService.getPlanet(id).then(this.onPlanetLoaded);
    };

    render() {

        const { planet: { id, name, population, rotationPeriod, diameter } } = this.state;

        return (
            <nav className="random-planet">
                <Spinner/>
                <div className="card">
                    <div className="d-flex">
                        <div>
                            <img className="card-img m-3 rounded-lg"
                                 alt="Planet Image"
                                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
                        </div>
                        <div className="d-flex align-items-center">
                            <div>
                                <h2>{name}</h2>
                                <table className="table">
                                    <tr className="d-flex">
                                        <th className="w-100">Population</th>
                                        <td>{population}</td>
                                    </tr>
                                    <tr className="d-flex">
                                        <th className="w-100">Rotation Period</th>
                                        <td>{rotationPeriod}</td>
                                    </tr>
                                    <tr className="d-flex">
                                        <th className="w-100">Diameter</th>
                                        <td>{diameter}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
};