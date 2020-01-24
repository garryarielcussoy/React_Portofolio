import React from 'react';
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";

const FooterComponent = () => {
    return (
        <div className='container-fluid footer'>
            <div className='row footer'>
                <div className='copyright col-md-2 col-6'>&copy; Copyright 2020</div>
                <div className='col-md-8 col-2'></div>
                <div className='about-us-link col-md-2 col-4'><Link to='/about'>About Us</Link></div>
            </div>
        </div>
    )
}

export default connect("", actions)(withRouter(FooterComponent));