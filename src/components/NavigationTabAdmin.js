import React from 'react';
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import axios from 'axios'
import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";

class NavigationTabAdmin extends React.Component{
    render(){
        return (
            <nav className='fixed-top navigation-menu'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='container-fluid'>
                                <div className='row navigation-tabs'>
                                    <div className='col-4 navigation-tab'>
                                        <Link to='/admin/users'><a onClick={() => this.props.handleAdmin()} className='users-tab'>User List</a></Link>
                                    </div>
                                    <div className='col-4 navigation-tab'>
                                        <Link to='/admin/transaksi'><a onClick={() => this.props.showAdminTransaksi()} className='transaction-list-tab'>Transaction List</a></Link>
                                    </div>
                                    <div className='col-4 navigation-tab'>
                                        <Link to='/'><a onClick={() => this.props.handleLogout()} className='cart-tab'>Logout</a></Link>
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

export default connect("isLogin", actions)(withRouter(NavigationTabAdmin));