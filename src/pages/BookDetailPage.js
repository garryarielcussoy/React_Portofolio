import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";

import HeaderAndNavigation from '../components/HeaderAndNavigation'
import FooterComponent from '../components/FooterComponent'
import BookDetailComponent from '../components/BookDetailComponent'

const BookDetailPage = () => {
    return (
        <React.Fragment>
            <HeaderAndNavigation />
            <BookDetailComponent />
            <FooterComponent />
        </React.Fragment>
    )
}

export default connect("", actions)(withRouter(BookDetailPage));