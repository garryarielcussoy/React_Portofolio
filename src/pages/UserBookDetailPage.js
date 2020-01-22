import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";

import Header from '../components/Header'
import FooterComponent from '../components/FooterComponent'
import NavigationTab from '../components/NavigationTab'
import BookDetailComponent from '../components/BookDetailComponent'
import AddToCart from '../components/AddToCart'

const UserBookDetailPage = (props) => {
    return (
        <React.Fragment>
            <Header />
            <NavigationTab />
            <BookDetailComponent />
            {this.props.canAdd === true ?
            <AddToCart />:
            <div></div>
            }
            <FooterComponent />
        </React.Fragment>
    )
}

export default connect("canAdd", actions)(withRouter(UserBookDetailPage));