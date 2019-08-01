import React, { Component } from 'react';

import './item-list.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

export default class ItemList extends Component {

    swapiService = new SwapiService();

    state = {
        personList: null
    };

    componentDidMount() {
        this.swapiService
            .getAllPerson()
            .then((personList) => {
                this.setState({
                    personList
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

        const { personList } = this.state;

        if (!personList) {
            return <Spinner/>;
        }

        const items = this.renderItems(personList);

        return (
            <div className="item-list mt-3 w-100">
                {items}
            </div>
        )
    }
};