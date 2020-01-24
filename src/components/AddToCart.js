import React from 'react';
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";

class AddToCart extends React.Component{
    // Handling function when user add a book to cart
    handleAddToCart = async () => {
        await this.props.addToCart()
        if (this.props.addToCartStatus === true){
            this.props.history.push('/users/buku')
        }
        this.props.showCart()
    }
    
    render(){
        return (
            <div className='container-fluid add-to-cart-container'>
                <div className='row'>
                    <div className='col-md-4 col-sm-12'></div>
                    <div className='col-md-4 col-sm-12 plus-minus-container'>
                        <form onSubmit={(e) => this.props.handleSubmit(e)}>
                        <button type='button' onClick={() => this.props.decreaseItem()} class="btn btn-outline-secondary search-button">-</button>
                        <span className='placeholder-start'>{this.props.placeholderStart}</span>
                        <button type="button" onClick={() => this.props.increaseItem()} class="btn btn-outline-secondary search-button">+</button>
                        <br />
                        <button type="submit" onClick={() => this.handleAddToCart()} class="btn btn-outline-secondary search-button">Tambah Ke Keranjang</button>
                        </form>
                    </div>
                    <div className='col-md-4 col-sm-12'></div>
                </div>
            </div>
        )
    }
}

export default connect("placeholderStart, addToCartStatus", actions)(withRouter(AddToCart));