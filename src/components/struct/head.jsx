import React, { Component } from 'react';
import { Link } from "react-router-dom";
import markup from "../../assets/1814106-location-map-marker.svg";
import search from "../../assets/Layer 2.svg";
import fence from "../../assets/008-fence-1.svg";
import E from "../../assets/E.svg";
import sliderBackground from "../../assets/img accueil-1.png";
const Head = () => {
    return (
        <React.Fragment>
            <input className="main-menu-mech" type="checkbox" name="main-menu-check-box" id="m-m-c" />
            <label className="main-menu-mech m-m-c-l" htmlFor="m-m-c">☰</label>
            <header>
                <div className="logo">
                    <p>Mon</p> <img src={E} /><p>xtérieur.fr</p>
                </div>

                <div className="search">
                    <img src={search} alt="search" className="left" />
                    <input type="text" name="" id="" placeholder="Recherche" />
                    <img src={search} alt="search" className="right" />
                </div>

                <div className="markup">
                    <img src={markup} alt="markup" className="left" />
                    <label>Notre magasin</label>
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
                <menu>
                    <div className="link" id="accueil">
                        <Link to="/">Accueil</Link>
                    </div>
                    <div className="link link-slider" id="boutique">
                        <div className="content">
                            <Link to="/boutique">Lame commposite</Link>
                            <Link to="/boutique">Lame en bois</Link>
                            <Link to="/boutique">Panneau bois</Link>
                            <Link to="/boutique">Grille rigide</Link>
                            <Link to="/boutique">Gabion</Link>
                            <img src={sliderBackground} alt="background" />
                        </div>
                        <div className="head">
                            <Link to="/boutique">Boutique</Link>
                        </div>
                    </div>
                    <div className="link">
                        <Link to="#">Nos Réalisation</Link>
                    </div>
                    <div className="link link-slider" id="contacterNous">
                        <div className="content">
                            <img src={sliderBackground} alt="background" className="not-me" />
                            <div className="container">
                                <article>Hey! Pour toute informations ou suggestions,
                             Merci de remplir le formulaire suivant</article>
                                <input type="text" placeholder="Nom & Prénom" />
                                <input type="text" placeholder="E-mail" />
                                <input type="text" placeholder="Message" />
                            </div>
                        </div>
                        <div className="head">Contacter Nous</div>
                    </div>
                </menu>
            </header>
        </React.Fragment>
    );
}

export default Head;