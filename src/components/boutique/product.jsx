import React, { Component } from 'react';
class Product extends Component {
    state = {}
    render() {
        return (
            <div className="product">
                <img src={this.props.value.picture} alt="product-img" />
                <p>{this.props.value.product_name}</p>
                <label>{this.props.value.price}</label>
            </div>
        );
    }
}

export default Product;