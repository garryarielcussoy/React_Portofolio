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
import AdminTransaksiListComponent from '../components/AdminTransaksiListComponent';

class AdminListTransaksiPage extends React.Component{
    render(){
        return (
            <React.Fragment>
                <Header />
                <NavigationTabAdmin />
                <AdminTransaksiListComponent />
                <Footer />
            </React.Fragment>
        )
    }
}

export default connect("", actions)(withRouter(AdminListTransaksiPage));