import React from 'react';

import './error-indicator.css';
import icon from './death-star.svg';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <div>
                <img src={icon} alt="Error Icon"/><br/>
                <span className="boom text-warning text-uppercase">Boom!</span><br/>
                <span className="text-warning">
                    something has gone terribly wrang
                </span><br/>
                <span className="text-warning">
                    (but we already sent our droids to fix it)
                </span>
            </div>
        </div>
    )
};

export default ErrorIndicator;