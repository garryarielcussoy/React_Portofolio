import React from 'react';
import serbaBukuLogo from '../img/SerbaBuku.png'
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";

const HeaderAndNavigation = (props) => {
    return (
        <div className='container-fluid fixed-top'>
            <div className='row header-and-navigation'>
                
                {/* ----- Logo ----- */}
                <div className='col-md-2 col-12 header-and-navigation-logo-container'>
                    {props.isLogin === true ?
                    <Link to='/users'><img className='header-and-navigation-logo' src={serbaBukuLogo} alt='SerbaBuku'/></Link>:
                    <Link to='/'><img className='header-and-navigation-logo' src={serbaBukuLogo} alt='SerbaBuku'/></Link>
                    }
                </div>

                <div className='col-md-6 col-12'></div>

                {/* ----- Home ----- */}
                <div className='col-md-1 col-3 navigation-tab'>
                    {props.isLogin === false ?
                    <Link to='/'><a className='home-tab'>Home</a></Link>:
                    <Link to='/users'><a className='home-tab'>Home</a></Link>
                    }
                </div>

                {/* ----- Book List ----- */}
                <div className='col-md-1 col-3 navigation-tab'>
                    {props.isLogin === false ?
                    <Link to='/public/buku'><a onClick={() => props.resetSearch()} className='book-list-tab'>Buku</a></Link>:
                    <Link to='/users/buku'><a onClick={() => props.resetSearch()} className='book-list-tab'>Buku</a></Link>
                    }
                </div>

                {/* ----- Cart ----- */}
                <div className='col-md-1 col-3 navigation-tab cart-tab-container'>
                    {props.isLogin === false ?
                    <Link to='/login'><a className='cart-tab'>Keranjang</a></Link>:
                    <Link to='/users/keranjang'><a onClick={() => props.showCart()} className='cart-tab'>Keranjang</a></Link>
                    }
                </div>

                {/* ----- Profile / Login ----- */}
                <div className='col-md-1 col-3 navigation-tab'>
                    <a onClick={() => props.showProfile()} className='profile-tab'>
                    {props.isLogin === false ? 
                    <Link to='/login'>Login</Link> :
                    <Link to='/users/profile'>Profile</Link>
                    }
                    </a>
                </div>
            </div>
        </div>
    )
}

export default connect("isLogin", actions)(withRouter(HeaderAndNavigation));