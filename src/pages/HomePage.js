import React from 'react';
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import axios from 'axios'
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";

import Header from '../components/Header'
import Carousel from '../components/Carousel'
import Footer from '../components/FooterComponent'
import NavigationTab from '../components/NavigationTab'

class HomePage extends React.Component{
    render(){
        return (
            <React.Fragment>
                <Header />
                <NavigationTab />
                <Carousel />
                <Footer />
            </React.Fragment>
        )
    }
}

export default connect("", actions)(withRouter(HomePage));