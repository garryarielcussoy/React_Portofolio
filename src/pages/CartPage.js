import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";

import HeaderAndNavigation from '../components/HeaderAndNavigation'
import Footer from '../components/FooterComponent'
import CartPageComponent from '../components/CartPageComponent';

const CartPage = (props) => {
    // For user who got logged out
    if (props.isLogin === false){
        props.history.push('/login')
    }
    
    return (
        <React.Fragment>
            <HeaderAndNavigation />
            <CartPageComponent />
            <Footer />
        </React.Fragment>
    )
}

export default connect("isLogin", actions)(withRouter(CartPage));