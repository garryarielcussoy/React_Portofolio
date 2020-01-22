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

class UserHomePage extends React.Component{
    render(){
        if (this.props.isLogin === true){
            return (
                <React.Fragment>
                    <Header />
                    <NavigationTab />
                    <Carousel />
                    <Footer />
                </React.Fragment>
            )
        }
        
        else {
            this.props.history.push('/login')
            return <div></div>
        }
    }
}

export default connect("isLogin", actions)(withRouter(UserHomePage));