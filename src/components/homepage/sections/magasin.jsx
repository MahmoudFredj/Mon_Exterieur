import React, { Component } from 'react';
import background from "../../../assets/c49410fcd941eb66349f9dd27fceebaf.png";
import saw from "../../../assets/image.png";
import E from '../../util/e';
const Magasin = () => {
    return (
        <section className="magasin-panel">
            <div className="background">

                <E className="e" />
                <img src={background} alt="too cool for school" />
            </div>
            <div className="content">
                <h1>Notre magasin</h1>
                <div className="off-content-left">

                    <div className="content">
                        <img src={saw} alt="saw" />
                    </div>
                    <div className="foot">
                        Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Minima laborum nulla dicta totam quas
                        voluptatem aliquam sequi eos sunt omnis cum quibusdam repellendus
                        tenetur atque ipsam, natus doloribus, tempore incidunt.
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Magasin;