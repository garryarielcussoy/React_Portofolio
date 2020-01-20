import React from 'react';
import '../styles/bootstrap.min.css'
import '../styles/main.css'
import serbaBukuLogo from '../img/SerbaBuku.png'

import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";

const FooterComponent = () => {
    return (
        <div className='container-fluid footer'>
            <div className='row footer'>
                <div className='col-md-2 col-6 footer-logo'>
                    <img src={serbaBukuLogo} alt='Logo SerbaBuku' className='footer-logo-image'/>
                </div>
                <div className='copyright col-md-8 col-6'>&copy; Copyright 2020</div>
                <div className='col-md-2 col-12 about-us-link'><Link to='/about'><a>About Us</a></Link></div>
            </div>
        </div>
    )
}

export default connect("", actions)(withRouter(FooterComponent));