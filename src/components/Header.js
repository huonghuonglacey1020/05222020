import React from 'react';


function Header() {

    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark  fix-navbar aqua-gradient">
                <span className="navbar-brand mb-0 h1">Huong Nguyen</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};

export default Header;