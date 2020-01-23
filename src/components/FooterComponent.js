import React from 'react';
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";

const FooterComponent = () => {
    return (
        <div className='container-fluid footer'>
            <div className='row footer'>
                <div className='copyright col-md-2 col-sm-6'>&copy; Copyright 2020</div>
                <div className='col-md-8 col-sm-12'></div>
                <div className='about-us-link col-md-2 col-sm-6'><Link to='/about'><a>About Us</a></Link></div>
            </div>
        </div>
    )
}

export default connect("", actions)(withRouter(FooterComponent));