import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";

import SimpleHeader from '../components/SimpleHeader'
import FooterComponent from '../components/FooterComponent'

import sadFace from '../img/sadFace.png'

const NotPageFound = () => {
    return (
        <React.Fragment>
            <SimpleHeader />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-2 col-sm-12'></div>
                    <div className='col-md-8 col-sm-12 not-found-content'>
                        <h4 className='not-found-title'>Maaf, halaman yang kamu cari tidak ditemukan</h4>
                        <img className='sad-face' src={sadFace}/>
                    </div>
                    <div className='col-md-2 col-sm-12'></div>
                </div>
            </div>
            <FooterComponent />
        </React.Fragment>
    )
}

export default connect("", actions)(withRouter(NotPageFound));