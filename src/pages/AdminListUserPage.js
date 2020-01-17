import React from 'react';
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import axios from 'axios'
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";

import Header from '../components/Header'
import Footer from '../components/FooterComponent'
import NavigationTabAdmin from '../components/NavigationTabAdmin'
import AdminUserListComponent from '../components/AdminUserListComponent';

class AdminListUserPage extends React.Component{
    render(){
        return (
            <React.Fragment>
                <Header />
                <NavigationTabAdmin />
                <AdminUserListComponent />
                <Footer />
            </React.Fragment>
        )
    }
}

export default connect("", actions)(withRouter(AdminListUserPage));