import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";

import Header from '../components/Header'
import Footer from '../components/FooterComponent'
import NavigationTab from '../components/NavigationTab'
import SearchAndFilter from '../components/SearchAndFiter'
import BookListPageComponent from '../components/BookListPageComponent'

const BookListPage = () => {
    return (
        <React.Fragment>
            <Header />
            <NavigationTab />
            <div className='container-fluid'>
                <div class='row'>
                    <div className='col-md-3 search-filter-container'>
                        <SearchAndFilter />
                    </div>
                    <div className='col-md-9 book-list-container'>
                        <BookListPageComponent />
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default connect("", actions)(withRouter(BookListPage));