import React, { Component } from 'react';
import E from "../../assets/E.svg";
import { Link } from "react-router-dom";
import clock from "../../assets/time.svg";
const Foot = () => {
    return (
        <footer>
            <div className="logo">
                <p>Mon</p> <img src={E} /><p>xterieur.fr</p>
            </div>
            <div className="lien-util">
                <h3>Lien Utiles</h3>
                <Link to="/#config"> Configurateur</Link>
                <Link to="/#magasin">Notre Magasin</Link>
                <Link to="/#instalation">Notice et installation</Link>
                <Link to="/#Livraison">Livraison transport</Link>
            </div>
            <div className="contact">
                <h3>Nous Contacter</h3>

                <h4>Address:</h4>
                <p>
                    3 rue du champ de verger Allonnes, Pays de la Loire, France
                </p>
                <h4>Telephone</h4>
                <label>+33 2 43 57 00 87</label>
            </div>
            <div className="horaire">
                <h3>Horaire</h3>

                <h4>Lundi a Vendredi</h4>
                <div className="time">
                    <img src={clock} alt="clock" /> <label>7:30 -12:00</label>
                </div>
                <div className="time">
                    <img src={clock} alt="clock" /> <label>13:30 -18:00</label>
                </div>
                <h4>Samedi</h4>
                <h5>Samedi ( Fermé les samedis de janvier et février)</h5>
                <div className="time">
                    <img src={clock} alt="clock" /> <label>9:00 -12:00</label>
                </div>
            </div>
        </footer>
    );
}

export default Foot;