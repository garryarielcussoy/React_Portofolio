import React from 'react';
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";

class AddToCart extends React.Component{
    // Handling function when user add a book to cart
    handleAddToCart = () => {
        this.props.addToCart()
        this.props.history.push('/users/buku')
        this.props.showCart()
    }
    
    render(){
        return (
            <div className='container-fluid add-to-cart-container'>
                <div className='row'>
                    <div className='col-md-4 col-sm-12'></div>
                    <div className='col-md-4 col-sm-12 plus-minus-container'>
                        <form onSubmit={(e) => this.props.handleSubmit(e)}>
                        <button type='button' onClick={() => this.props.decreaseItem()} class="btn btn-primary search-button">-</button>
                        <span className='placeholder-start'>{this.props.placeholderStart}</span>
                        <button type="button" onClick={() => this.props.increaseItem()} class="btn btn-primary search-button">+</button>
                        <br />
                        <button type="submit" onClick={() => this.handleAddToCart()} class="btn btn-primary search-button">Tambah Ke Keranjang</button>
                        </form>
                    </div>
                    <div className='col-md-4 col-sm-12'></div>
                </div>
            </div>
        )
    }
}

export default connect("placeholderStart", actions)(withRouter(AddToCart));