import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import axios from 'axios'
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";

import Header from '../components/Header'
import LoginComponent from '../components/LoginComponent'

class LoginPage extends React.Component{
    render(){
        return (
            <React.Fragment>
                <Header />
                <LoginComponent />
            </React.Fragment>
        )
    }
}

export default connect("", actions)(withRouter(LoginPage));