import React from 'react';

import '../../services/swapi-service';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

const App = () => {
    return (
        <div>
            <Header/>
            <RandomPlanet/>
            <ItemList/>
            <PersonDetails/>
        </div>
    );
};

export default App;