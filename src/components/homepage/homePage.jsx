import React, { Component } from 'react';
import headImg from "../../assets/644f2a92d0893d909051469bf4dd3f29@2x.png";
import labecomposite from "../../assets/img-1.png";
import lameenbois from "../../assets/img.png";
import panneausois from "../../assets/img-2.png";
import grillerigide from "../../assets/img-3.png";
import gabion from "../../assets/img-4.png";
import ConfigSpace from './sections/configSpace';
import Instalation from './sections/instalation';
import Magasin from './sections/magasin';
import Realisation from './sections/realisation';
const HomePage = () => {
    return (
        <div className="home-page-wrapper">
            <div className="head-content home-head">
                <img src={headImg} alt="" />
                <div className="sections">
                    <div>
                        <div className="title">Lame Composite</div>
                        <img src={labecomposite} alt="Lame Composite" />
                    </div>
                    <div>
                        <div className="title">Lame en bois</div>
                        <img src={lameenbois} alt="Lame en bois" />
                    </div>
                    <div>
                        <div className="title">Panneau sois</div>
                        <img src={panneausois} alt="Panneau sois" />
                    </div>
                    <div>
                        <div className="title">Grille rigide</div>
                        <img src={grillerigide} alt="Grille rigide" />
                    </div>
                    <div>
                        <div className="title">Gabion</div>
                        <img src={gabion} alt="Gabion" />
                    </div>
                </div>
            </div>
            <div className="sections">
                <ConfigSpace />
                <Realisation />
                <Instalation />
                <Magasin />
            </div>
        </div>);
}

export default HomePage;