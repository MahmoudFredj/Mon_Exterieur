import React, { Component } from 'react';
import markup from "../../assets/1814106-location-map-marker.svg";
import search from "../../assets/Layer 2.svg";
import fence from "../../assets/008-fence-1.svg";
import E from "../../assets/E.svg";
const Head = () => {
    return (
        <header>
            <div className="logo">
                <p>Mon</p> <img src={E} /><p>xterieur.fr</p>
            </div>

            <div className="search">
                <img src={search} alt="search" className="left" />
                <input type="text" name="" id="" placeholder="Recherche" />
                <img src={search} alt="search" className="right" />
            </div>

            <div className="markup">
                <img src={markup} alt="markup" className="left" />
                <label>Markup</label>
                <img src={markup} alt="markup" className="right" />
            </div>

            <div className="configuration">
                <img src={fence} alt="fence" className="left" />
                <label>Configuration</label>
                <img src={fence} alt="fence" className="right" />
            </div>

        </header>
    );
}

export default Head;