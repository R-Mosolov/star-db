import React, { Component } from 'react';

import './item-list-planet.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

export default class ItemListPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        planetList: null
    };

    componentDidMount() {
        this.swapiService
            .getAllPlanets()
            .then((planetList) => {
                this.setState({
                    planetList
                });
            });
    }

    renderItems(arr) {
        return arr.map(({id, name}) => {
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                    {name}
                </li>
            );
        });
    }

    render() {

        const { planetList } = this.state;

        if (!planetList) {
            return <Spinner/>;
        }

        const items = this.renderItems(planetList);

        return (
            <div className="item-list mt-3 w-100">
                {items}
            </div>
        )
    }
};