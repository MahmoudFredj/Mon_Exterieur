import React, { Component } from 'react';
import background from "../../../assets/1e1fc50768fe089201a9d2f194ad33f1.png";
import right from "../../../assets/arrow-left-line -r.svg";
import left from "../../../assets/arrow-left-line-1.svg";
import E from '../../util/e';
const Realisation = () => {
    return (
        <section className="realisation-panel">
            <div className="content">
                <h1>Nos realisations</h1>
                <div className="off-content-right">
                    <div className="title">
                        <h3>Panneau bois</h3>
                    </div>
                    <div className="content">
                        <article>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod odit q
                            uos incidunt perferendis nisi aspernatur dolor minima iure at cumque distinc
                            tio amet mollitia assumenda, veritatis, atque ipsum, delectus suscipit.
                            Cupiditate?
                        </article>
                    </div>
                    <div className="foot">
                        <img src={left} alt="left arrow" />
                        <div className="min-pag">
                            <span></span>
                            <span className="active"></span>
                            <span></span>
                        </div>
                        <img src={right} alt="right arrow" />
                    </div>
                </div>
            </div>
            <div className="background">
                <E className="e" />
                <img src={background} alt="too cool for school" />
            </div>
        </section>
    );
}

export default Realisation;