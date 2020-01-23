import React from 'react';
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";

import Header from '../components/Header'
import Carousel from '../components/Carousel'
import Footer from '../components/FooterComponent'
import NavigationTab from '../components/NavigationTab'
import HeaderAndNavigation from '../components/HeaderAndNavigation'

const HomePage = () => {
    return (
        <React.Fragment>
            <HeaderAndNavigation />
            <Carousel />
            <Footer />
        </React.Fragment>
    )
}

export default connect("", actions)(withRouter(HomePage));