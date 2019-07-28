import React from 'react';

import './random-planet.css';

const RandomPlanet = () => {
    return (
        <nav className="random-planet">
            <div className="card">
                <div className="d-flex">
                    <div>
                        <img className="card-img m-3 rounded-lg"
                             alt="Planet Image"
                             src="https://cdn.mos.cms.futurecdn.net/pNX8eVGowB6WT8tyrTMufk-650-80.jpg"/>
                    </div>
                    <div className="d-flex align-items-center">
                        <div>
                            <h2>Planet Name</h2>
                            <table className="table">
                                <tr className="d-flex">
                                    <th className="w-100">Population</th>
                                    <td>123124</td>
                                </tr>
                                <tr className="d-flex">
                                    <th className="w-100">Rotation Period</th>
                                    <td>43</td>
                                </tr>
                                <tr className="d-flex">
                                    <th className="w-100">Diameter</th>
                                    <td>100</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default RandomPlanet;