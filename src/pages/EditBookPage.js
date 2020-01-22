import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";

import Header from '../components/Header'
import EditBookComponent from '../components/EditBookComponent'

const EditBookPage = () => {
    return (
        <React.Fragment>
            <Header />
            <EditBookComponent />
        </React.Fragment>
    )
}

export default connect("", actions)(withRouter(EditBookPage));