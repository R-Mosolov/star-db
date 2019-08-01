import React, { Component } from 'react';

import './person-details.css';
import SwapiService from "../../services/swapi-service";
import ErrorButton from "../error-button";
import ErrorIndicator from "../error-indicator";

export default class PersonDetails extends Component {

    swapiService = new SwapiService();

    state = {
        person: null,
        loading: false,
        hasError: false
    };

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log('componentDidCatch()');
        this.setState({
            hasError: true
        });
    }

    updatePerson() {
        const { personId } = this.props;
        if (!personId) {
            return;
        }

        this.swapiService
            .getPerson(personId)
            .then((person) => {
                this.setState({
                    person
                });
            });
    }

    render() {

        if (!this.state.person) {
            return <p className="mt-3">Select a person from a list</p>;
        }

        if (this.state.hasError) {
            return <ErrorIndicator/>;
        }

        const { id, name, gender,
                birthYear, eyeColor } = this.state.person;

        return (
            <nav className="person-details ml-lg-3 mt-3 w-100">
                <div className="card">
                    <div className="d-flex">
                        <div>
                            <img className="card-img m-3 rounded-lg"
                                 alt="Person from Star Wars"
                                 src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}/>
                        </div>
                        <div className="d-flex align-items-center">
                            <div>
                                <h3>{name}</h3>
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <span className="mr-2">Gender:</span>
                                        <span>{gender}</span>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="mr-2">Birth Year:</span>
                                        <span>{birthYear}</span>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="mr-2">Eye Color:</span>
                                        <span>{eyeColor}</span>
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