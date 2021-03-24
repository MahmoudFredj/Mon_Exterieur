import React, { Component } from 'react';
import E from '../../util/e';
import first from "../../../assets/e500199212df6569618a2e3549b80fce.png";
import second from "../../../assets/761facd5d3be9159ac1d143a44924e0f.png";
import third from "../../../assets/afdc3dce7588e76f92d58352ab92564b.png";
import fourth from "../../../assets/f27f6de5647a9ecb5588ec65948ed071.png";
import fifth from "../../../assets/cc7e9c70feb22a4d36281429e5b05797.png";
const Instalation = () => {
    return (
        <section className="instalation-panel">
            <div className="notice">
                <h3>Notice & Instalation</h3>
                <article>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex tempore
                    incidunt id at animi accusamus debitis? Velit nemo, perspiciatis delectus
                    quibusdam deserunt laudantium. Id quo expedita repudiandae
                    magnam quisquam labore!
                </article>
                <div className="foot"></div>
            </div>
            <div className="example">
                <E className="e" />
                <img src={first} alt="first" />
            </div>
            <div className="example">
                <E className="e" />
                <img src={second} alt="second" />
            </div>
            <div className="example">
                <E className="e" />
                <img src={third} alt="third" />
            </div>
            <div className="example">
                <E className="e" />
                <img src={fourth} alt="fourth" />
            </div>
            <div className="example">
                <E className="e" />
                <img src={fifth} alt="fifth" />
            </div>
        </section>
    );
}

export default Instalation;