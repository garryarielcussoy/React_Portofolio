import React from 'react';
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";

const NavigationTab = (props) => {
    return (
        <nav className='fixed-top navigation-menu'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='container-fluid'>
                            <div className='row navigation-tabs'>

                                {/* ----- Home ----- */}
                                <div className='col-3 navigation-tab'>
                                    {props.isLogin === false ?
                                    <Link to='/'><a className='home-tab'>Home</a></Link>:
                                    <Link to='/users'><a className='home-tab'>Home</a></Link>
                                    }
                                </div>

                                {/* ----- Book List ----- */}
                                <div className='col-3 navigation-tab'>
                                    {props.isLogin === false ?
                                    <Link to='/public/buku'><a onClick={() => props.resetSearch()} className='book-list-tab'>Buku</a></Link>:
                                    <Link to='/users/buku'><a onClick={() => props.resetSearch()} className='book-list-tab'>Buku</a></Link>
                                    }
                                </div>

                                {/* ----- Cart ----- */}
                                <div className='col-3 navigation-tab'>
                                    {props.isLogin === false ?
                                    <Link to='/login'><a className='cart-tab'>Keranjang</a></Link>:
                                    <Link to='/users/keranjang'><a onClick={() => props.showCart()} className='cart-tab'>Keranjang</a></Link>
                                    }
                                </div>

                                {/* ----- Profile / Login ----- */}
                                <div className='col-3 navigation-tab'>
                                    <a onClick={() => props.showProfile()} className='profile-tab'>
                                    {props.isLogin === false ? 
                                    <Link to='/login'>Login</Link> :
                                    <Link to='/users/profile'>Profile</Link>
                                    }
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default connect("isLogin", actions)(withRouter(NavigationTab));