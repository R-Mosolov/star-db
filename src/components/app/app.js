import React, { Component } from 'react';

import '../../services/swapi-service';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import PlanetDetails from '../planet-details';
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: 5,
        selectedPlanet: 5,
        hasError: false
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    onPlanetSelected = (id) => {
        this.setState({
            selectedPlanet: id
        });
    };

    componentDidCatch(error, errorInfo) {
        console.log('componentDidCatch()');
        this.setState({
            hasError: true
        });
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator/>;
        }

        return (
            <div className="container">
                <Header/>

                <h2 className="mt-3">Random Planet</h2>
                <RandomPlanet/>

                <h2 className="mt-3">Select a Person</h2>
                <div className="d-lg-flex mb-3">
                    <ItemList
                        onItemSelected={this.onPersonSelected}
                        getData={this.swapiService.getAllPerson}/>
                    <PersonDetails personId={this.state.selectedPerson}/>
                </div>

                <h2 className="mt-3">Select a Planet</h2>
                <div className="d-lg-flex mb-3">
                    <ItemList
                        onItemSelected={this.onPlanetSelected}
                        getData={this.swapiService.getAllPlanets}/>
                    <PlanetDetails planetId={this.state.selectedPlanet}/>
                </div>
            </div>
        );
    }
};