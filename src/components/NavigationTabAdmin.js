import React from 'react';
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";

const NavigationTabAdmin = (props) => {
    return (
        <nav className='fixed-top navigation-menu'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='container-fluid'>
                            <div className='row navigation-tabs'>

                                {/* ----- Show all users list ----- */}
                                <div className='col-4 navigation-tab'>
                                    <Link to='/admin/users'><a onClick={() => props.handleAdmin()} className='users-tab'>User List</a></Link>
                                </div>

                                {/* ----- Show all transactions ---- */}
                                <div className='col-4 navigation-tab'>
                                    <Link to='/admin/transaksi'><a onClick={() => props.showAdminTransaksi()} className='transaction-list-tab'>Transaction List</a></Link>
                                </div>

                                {/* ----- Logout ----- */}
                                <div className='col-4 navigation-tab'>
                                    <Link to='/'><a onClick={() => props.handleLogout()} className='cart-tab'>Logout</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default connect("isLogin", actions)(withRouter(NavigationTabAdmin));