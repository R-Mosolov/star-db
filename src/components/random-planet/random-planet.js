import React, {Component} from 'react';

import SwapiService from '../../services/swapi-service';

import './random-planet.css';

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        id: null,
        name: null,
        population: null,
        rotationPeriod: null,
        diameter: null
    };

    constructor() {
        super();
        this.updatePlanet();
    }

    updatePlanet() {
        const id = Math.floor(Math.random() * 15) + 2;
        this.swapiService.getPlanet(id).then((planet) => {
            this.setState({
                id,
                name: planet.name,
                population: planet.population,
                rotationPeriod: planet.rotation_period,
                diameter: planet.diameter
            });
        });
    };

    render() {

        const {id, name, population, rotationPeriod, diameter} = this.state;

        return (
            <nav className="random-planet">
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