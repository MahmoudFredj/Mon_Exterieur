import React, { Component } from 'react';
import { loadBoutique } from "../../store/entities/boutique";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import toolbox from "../../assets/029-toolbox.svg";
import arrow from "../../assets/arrow-left-line-2.svg";
import E from '../util/e';
import Product from './product';
import Paralax from '../util/paralex';
import Loading from "../util/loading";
class BoutiquePage extends Component {
    async componentDidMount() {
        console.log('pis');
        await this.props.loadBoutique();
        console.log(this.props.products);
    }
    render() {
        return (
            <div className="boutique-page-wrapper">
                {this.props.loading &&
                    <Loading />
                }
                <Paralax className="head-content boutique-head">
                    <h1>Nos Produits</h1>
                    <label> Accueil{'>'}Boutique</label>
                </Paralax>
                <div className="main-page-wrapper">
                    <menu className="head-menu">
                        <Link className="active" to="#">Nouveautés</Link>
                        <Link to="#">Populaire</Link>
                        <Link to="#">Meilleures Ventes</Link>
                    </menu>
                    <aside>
                        <menu className="side-menu">
                            <h3>CATÉGORIES</h3>
                            <Link className="active" to="#">Lame Bois</Link>
                            <Link to="#">Lame Composite</Link>
                            <Link to="#">Panneau Bois</Link>
                            <Link to="#">Grille Rigide</Link>
                            <Link to="#">Gabion</Link>
                        </menu>
                        <div className="config-space">
                            <img src={toolbox} alt="toolbox" />
                            <h3>Configurez votre espace</h3>
                            <article>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Accusamus architecto autem distinctio ex ab beatae qui, repellat atque consequuntur
                                officiis quas alias voluptatibus sapiente amet. Est obcaecati dolorem minus at.
                            </article>
                            <E className="cnf-spc-e" />
                            <div className="boxer">
                                <img src={arrow} alt="arrow" className="arrow" />
                            </div>
                        </div>
                    </aside>
                    <div className="main-content">
                        {this.props.products.map(product => <Product key={product.id} value={product} />)}
                    </div>
                </div>
            </div>
        );
    }
}

const mapState = (state) => ({
    loading: state.boutique.loading,
    products: state.boutique.list,
    error: state.boutique.error,
});
const mapDispatch = (dispatch) => ({
    loadBoutique: () => dispatch(loadBoutique()),
});
export default connect(mapState, mapDispatch)(BoutiquePage);