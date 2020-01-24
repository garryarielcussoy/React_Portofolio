import React from 'react';
import serbaBukuLogo from '../img/SerbaBuku.png'
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";

const SimpleHeader = (props) => {
    return (
        <div className='container-fluid fixed-top'>
            <div className='row header-and-navigation'>
                
                <div className='col-md-4 col-sm-12'></div>

                {/* ----- Logo ----- */}
                <div className='col-md-4 col-sm-12 header-and-navigation-logo-container'>
                    {props.isLogin === true ?
                    <Link to='/users'><img className='header-and-navigation-logo' src={serbaBukuLogo} alt='SerbaBuku'/></Link>:
                    <Link to='/'><img className='header-and-navigation-logo' src={serbaBukuLogo} alt='SerbaBuku'/></Link>
                    }
                </div>

                <div className='col-md-4 col-sm-12'></div>
            </div>
        </div>
    )
}

export default connect("isLogin", actions)(withRouter(SimpleHeader));