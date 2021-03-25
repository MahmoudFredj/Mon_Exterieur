import React, { Component } from 'react';
import { Link } from "react-router-dom";
import arrow from "../../assets/arrow-left-line.svg";
class Product extends Component {
    state = {}
    render() {
        return (
            <div className="product">
                <img src={this.props.value.picture} alt="product-img" />
                <p>{this.props.value.product_name}</p>
                <label>{this.props.value.price}</label>
                <Link to="#">Voire Detail <img className="arw-link-prdct" src={arrow} alt="arrow" /></Link>

            </div>
        );
    }
}

export default Product;