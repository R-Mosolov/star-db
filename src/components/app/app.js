import React, { Component } from 'react';

import '../../services/swapi-service';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

export default class App extends Component {

    state = {
        selectedPerson: 5
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    render() {
        return (
            <div className="container">
                <Header/>
                <h2 className="mt-3">Random Planet</h2>
                <RandomPlanet/>
                <h2 className="mt-3">Select a Person</h2>
                <div className="d-lg-flex mb-3">
                    <ItemList onItemSelected={this.onPersonSelected}/>
                    <PersonDetails personId={this.state.selectedPerson}/>
                </div>
            </div>
        );
    }
};