import React, { Component } from 'react';

import './planet-details.css';
import SwapiService from "../../services/swapi-service";
import ErrorButton from "../error-button";
import ErrorIndicator from "../error-indicator";

export default class PlanetDetails extends Component {

    swapiService = new SwapiService();

    state = {
        planet: null,
        loading: false,
        hasError: false
    };

    componentDidMount() {
        this.updatePlanet();
    }

    componentDidUpdate(prevProps) {
        if (this.props.planetId !== prevProps.planetId) {
            this.updatePlanet();
        }
    }

    componentDidCatch(error, errorInfo) {
        debugger;
        this.setState({
            hasError: true
        });
    }

    updatePlanet() {
        const { planetId } = this.props;
        if (!planetId) {
            return;
        }

        this.swapiService
            .getPlanet(planetId)
            .then((planet) => {
                this.setState({
                    planet
                });
            });
    }

    render() {

        if (!this.state.planet) {
            return <p className="mt-3">Select a planet from a list</p>;
        }

        if (this.state.hasError) {
            return <ErrorIndicator/>;
        }

        const { id, name, population,
            rotationPeriod, diameter } = this.state.planet;

        return (
            <nav className="planet-details ml-lg-3 mt-3 w-100">
                <div className="card">
                    <div className="d-flex">
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
                    </div>
                    <div className="d-flex justify-content-center mb-4">
                        <ErrorButton/>
                    </div>
                </div>
            </nav>
        )
    }
};