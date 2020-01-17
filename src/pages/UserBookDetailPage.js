import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import axios from 'axios'
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";

import Header from '../components/Header'
import FooterComponent from '../components/FooterComponent'
import NavigationTab from '../components/NavigationTab'
import SearchAndFilter from '../components/SearchAndFiter'
import BookListPageComponent from '../components/BookListPageComponent'
import BookDetailComponent from '../components/BookDetailComponent'
import AddToCart from '../components/AddToCart'

class UserBookDetailPage extends React.Component{
    render(){
        return (
            <React.Fragment>
                <Header />
                <NavigationTab />
                <BookDetailComponent />
                {this.props.canAdd === true ?
                <AddToCart />:
                <div></div>
                }
                <FooterComponent />
            </React.Fragment>
        )
    }
}

export default connect("judulBuku, namaUserPenjual, penerbit, pengarang, nomorIsbn, idBuku, category, isLoading, daftarBuku, isSearch, isFilter, dataBuku, canAdd", actions)(withRouter(UserBookDetailPage));