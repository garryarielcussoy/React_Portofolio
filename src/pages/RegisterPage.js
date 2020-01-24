import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";

import SimpleHeader from '../components/SimpleHeader'
import RegisterComponent from '../components/RegisterComponent';

const RegisterPage = () => {
    return (
        <React.Fragment>
            <SimpleHeader />
            <RegisterComponent />
        </React.Fragment>
    )
}

export default connect("", actions)(withRouter(RegisterPage));