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

export default connect("canAdd", actions)(withRouter(UserBookDetailPage));