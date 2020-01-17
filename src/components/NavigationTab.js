import React from 'react';
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import axios from 'axios'
import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";

class NavigationTab extends React.Component{
    render(){
        return (
            <nav className='fixed-top navigation-menu'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='container-fluid'>
                                <div className='row navigation-tabs'>
                                    <div className='col-3 navigation-tab'>
                                        {this.props.isLogin === false ?
                                        <Link to='/'><a className='home-tab'>Home</a></Link>:
                                        <Link to='/users'><a className='home-tab'>Home</a></Link>
                                        }
                                    </div>
                                    <div className='col-3 navigation-tab'>
                                        {this.props.isLogin === false ?
                                        <Link to='/public/buku'><a onClick={() => this.props.resetSearch()} className='book-list-tab'>Buku</a></Link>:
                                        <Link to='/users/buku'><a onClick={() => this.props.resetSearch()} className='book-list-tab'>Buku</a></Link>
                                        }
                                    </div>
                                    <div className='col-3 navigation-tab'>
                                        {this.props.isLogin === false ?
                                        <Link to='/login'><a className='cart-tab'>Keranjang</a></Link>:
                                        <Link to='/users/keranjang'><a onClick={() => this.props.showCart()} className='cart-tab'>Keranjang</a></Link>
                                        }
                                    </div>
                                    <div className='col-3 navigation-tab'>
                                        <a onClick={() => this.props.showProfile()} className='profile-tab'>
                                        {this.props.isLogin === false ? 
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
}

export default connect("isLogin", actions)(withRouter(NavigationTab));