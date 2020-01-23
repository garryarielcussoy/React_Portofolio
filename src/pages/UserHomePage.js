import React from 'react';
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";

import HeaderAndNavigation from '../components/HeaderAndNavigation'
import Carousel from '../components/Carousel'
import Footer from '../components/FooterComponent'
import NavigationTab from '../components/NavigationTab'

const UserHomePage = (props) => {
    // For user
    if (props.isLogin === true){
        return (
            <React.Fragment>
                <HeaderAndNavigation />
                <Carousel />
                <Footer />
            </React.Fragment>
        )
    }
    
    // For someone who has not logged in
    else {
        props.history.push('/login')
        return <div></div>
    }
}

export default connect("isLogin", actions)(withRouter(UserHomePage));