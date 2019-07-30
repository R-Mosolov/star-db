import React from 'react';

import './header.css';

const Header = () => {
    return (
        <nav className="header d-flex justify-content-between">
            <div>
                <h1>Star DB</h1>
            </div>
            <div className="d-flex align-items-center">
                <a href="#">People</a>
                <a className="ml-5" href="#">Planets</a>
                <a className="ml-5" href="#">Starship</a>
            </div>
        </nav>
    )
};

export default Header;