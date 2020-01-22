import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";

import Header from '../components/Header'
import FooterComponent from '../components/FooterComponent';

const AboutPage = (props) => {
    return (
        <React.Fragment>
            <div className='peak'>
            <Header />
            <h4 className='about-us-title'>ABOUT US</h4>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-3 col-sm-1'></div>
                    <div className='col-md-6 col-sm-10 about-us-content'>
                        <p>
                            SerbaBuku adalah sebuah wadah digital bagi para pecinta buku untuk saling
                            bertukar informasi (sekaligus komunikasi awal proses jual-beli) mengenai buku-buku.
                            SerbaBuku terbuka untuk segala jenis buku, sesuai dengan kategori yang tersedia.
                        </p>
                    </div>
                    <div className='col-md-3 col-sm-1'></div>
                </div>
            </div>
            </div>
            <FooterComponent />
        </React.Fragment>
    )
}

export default connect("", actions)(withRouter(AboutPage));