import React from 'react';
import serbaBukuLogo from '../img/SerbaBuku.png'
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";

const Header = (props) => {
    return (
        <div className='container-fluid fixed-top'>
            <div className='row'>
                <div className='col-12 header'>
                    {props.isLogin === true ?
                    <Link to='/users'><img className='serba-buku-header-logo' src={serbaBukuLogo} alt='SerbaBuku'/></Link>:
                    <Link to='/'><img className='serba-buku-header-logo' src={serbaBukuLogo} alt='SerbaBuku'/></Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default connect("isLogin", actions)(withRouter(Header));