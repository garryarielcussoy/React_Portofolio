import React from 'react';
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";

const SimpleFooter = () => {
    return (
        <div className='container-fluid footer'>
            <div className='row footer'>
                <div className='col-md-5 col-4'></div>
                <div className='copyright col-md-2 col-4'>&copy; Copyright 2020</div>
                <div className='col-md-5 col-4'></div>
            </div>
        </div>
    )
}

export default connect("", actions)(withRouter(SimpleFooter));