import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";

import HeaderAndNavigation from '../components/HeaderAndNavigation'
import Footer from '../components/FooterComponent'
import CartPageComponent from '../components/CartPageComponent';

const CartPage = () => {
    return (
        <React.Fragment>
            <HeaderAndNavigation />
            <CartPageComponent />
            <Footer />
        </React.Fragment>
    )
}

export default connect("", actions)(withRouter(CartPage));