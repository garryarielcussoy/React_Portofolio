import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";

import HeaderAndNavigation from '../components/HeaderAndNavigation'
import FooterComponent from '../components/FooterComponent'
import BookDetailComponent from '../components/BookDetailComponent'
import AddToCart from '../components/AddToCart'

const UserBookDetailPage = (props) => {
    // For user who got logged out
    if (props.isLogin === false){
        props.history.push('/login')
    }
    
    return (
        <React.Fragment>
            <HeaderAndNavigation />
            <BookDetailComponent />
            {props.canAdd === true ?
            <AddToCart />:
            <div></div>
            }
            <FooterComponent />
        </React.Fragment>
    )
}

export default connect("canAdd, isLogin", actions)(withRouter(UserBookDetailPage));