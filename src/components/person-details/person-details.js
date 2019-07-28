import React from 'react';

import './person-details.css';

const PersonDetails = () => {
    return (
        <nav className="person-details mt-3">
            <div className="card">
                <div className="d-flex">
                    <div>
                        <img className="card-img m-3 rounded-lg"
                             alt="Planet Image"
                             src="https://images-na.ssl-images-amazon.com/images/I/712Lwo7hMoL._SX425_.jpg"/>
                    </div>
                    <div className="d-flex align-items-center">
                        <div>
                            <h2>R2-D2</h2>
                            <table className="table">
                                <tr className="d-flex">
                                    <th className="w-100">Gender</th>
                                    <td>123124</td>
                                </tr>
                                <tr className="d-flex">
                                    <th className="w-100">Birth Year</th>
                                    <td>43</td>
                                </tr>
                                <tr className="d-flex">
                                    <th className="w-100">Eye Color</th>
                                    <td>red</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default PersonDetails;