import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";

import HeaderAndNavigation from '../components/HeaderAndNavigation'
import Footer from '../components/FooterComponent'
import SearchAndFilter from '../components/SearchAndFiter'
import BookListPageComponent from '../components/BookListPageComponent'

const BookListPage = () => {
    return (
        <React.Fragment>
            <HeaderAndNavigation />
            <div className='container-fluid'>
                <div class='row'>
                    <div className='col-1'></div>
                    <div className='col-md-4 col-sm-10 search-filter-container'>
                        <SearchAndFilter />
                    </div>
                    <div className='col-md-6 col-sm-12 book-list-container'>
                        <BookListPageComponent />
                    </div>
                    <div className='col-md-1 col-sm-12'></div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default connect("", actions)(withRouter(BookListPage));