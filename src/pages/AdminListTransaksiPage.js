import React from 'react';
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";

import Header from '../components/Header'
import Footer from '../components/FooterComponent'
import NavigationTabAdmin from '../components/NavigationTabAdmin'
import AdminTransaksiListComponent from '../components/AdminTransaksiListComponent';

const AdminListTransaksiPage = () => {
    return (
        <React.Fragment>
            <Header />
            <NavigationTabAdmin />
            <AdminTransaksiListComponent />
            <Footer />
        </React.Fragment>
    )
}

export default connect("", actions)(withRouter(AdminListTransaksiPage));