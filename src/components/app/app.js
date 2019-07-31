import React, { Component } from 'react';

import '../../services/swapi-service';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorButton from '../error-button';
import ErrorIndicator from "../error-indicator";

export default class App extends Component {

    state = {
        selectedPerson: 5,
        hasError: false
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
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
                <ErrorButton/>
                <h2 className="mt-3">Select a Person</h2>
                <div className="d-lg-flex mb-3">
                    <ItemList onItemSelected={this.onPersonSelected}/>
                    <PersonDetails personId={this.state.selectedPerson}/>
                </div>
            </div>
        );
    }
};