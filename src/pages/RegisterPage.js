import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";

import Header from '../components/Header'
import RegisterComponent from '../components/RegisterComponent';

const RegisterPage = () => {
    return (
        <React.Fragment>
            <Header />
            <RegisterComponent />
        </React.Fragment>
    )
}

export default connect("", actions)(withRouter(RegisterPage));