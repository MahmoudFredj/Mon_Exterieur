import React, { Component } from 'react';
import arrow from "../../../assets/arrow-left-line-2.svg";
import fence from "../../../assets/008-fence-1.svg";
import E from '../../util/e';
const ConfigSpace = () => {
    return (
        <section id="config" className="config-space">
            <div className="config-panel">
                <div className="background"></div>
                <E className="config-svg" />
                <img src={fence} alt="fence" />
                <div className="content">
                    <h1>Configurez votre espace</h1>
                    <article>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio maxime fugiat similique officia, id sunt numquam, sequi quia placeat tempora illum porro, repudiandae deleniti necessitatibus dolore totam consectetur consequatur harum.
                    </article>
                </div>
                <img src={arrow} alt="arrow" />
            </div>
        </section>
    );
}

export default ConfigSpace;