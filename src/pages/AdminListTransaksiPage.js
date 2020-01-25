import React from 'react';
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";

import Header from '../components/Header'
import SimpleFooter from '../components/SimpleFooter'
import NavigationTabAdmin from '../components/NavigationTabAdmin'
import AdminTransaksiListComponent from '../components/AdminTransaksiListComponent';

const AdminListTransaksiPage = () => {
    return (
        <React.Fragment>
            <Header />
            <NavigationTabAdmin />
            <AdminTransaksiListComponent />
            <SimpleFooter />
        </React.Fragment>
    )
}

export default connect("", actions)(withRouter(AdminListTransaksiPage));