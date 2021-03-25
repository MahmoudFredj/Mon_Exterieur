import React, { Component } from 'react';
import { Link } from "react-router-dom";
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

            <div className="not-me">
                <div className="configuration">
                    <img src={fence} alt="fence" className="left" />
                    <label>Configuration</label>
                    <img src={fence} alt="fence" className="right" />
                </div>
            </div>

            {/* menu */}
            <div className="link" id="accueil">
                <Link to="/">Accueil</Link>
            </div>
            <div className="link link-slider">
                <div className="content"></div>
                <div className="head">
                    <Link to="/boutique">Boutique</Link></div>
            </div>
            <div className="link">
                <Link to="/realisation">Nos Réalisation</Link>
            </div>
            <div className="link link-slider" id="contacterNous">
                <div className="content"></div>
                <div className="head">Contacter Nous</div>
            </div>
        </header>
    );
}

export default Head;