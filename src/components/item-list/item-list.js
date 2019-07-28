import React from 'react';

import './item-list.css';

const ItemList = () => {
    return (
        <div className="item-list card mt-3">
            <table className="table">
                <tr className="d-flex">
                    <th className="w-100">Luke Skywalker</th>
                </tr>
                <tr className="d-flex">
                    <th className="w-100">Darth Vader</th>
                </tr>
                <tr className="d-flex">
                    <th className="w-100">R2-D2</th>
                </tr>
            </table>
        </div>
    )
};

export default ItemList;