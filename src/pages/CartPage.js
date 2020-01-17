import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import axios from 'axios'
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";

import Header from '../components/Header'
import Footer from '../components/FooterComponent'
import NavigationTab from '../components/NavigationTab'
import CartPageComponent from '../components/CartPageComponent';

class CartPage extends React.Component{
    render(){
        return (
            <React.Fragment>
                <Header />
                <NavigationTab />
                <CartPageComponent />
                <Footer />
            </React.Fragment>
        )
    }
}

export default connect("", actions)(withRouter(CartPage));