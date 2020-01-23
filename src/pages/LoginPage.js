import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";

import SimpleHeader from '../components/SimpleHeader'
import LoginComponent from '../components/LoginComponent'

const LoginPage = () => {
    return (
        <React.Fragment>
            <SimpleHeader />
            <LoginComponent />
        </React.Fragment>
    )
}

export default connect("", actions)(withRouter(LoginPage));