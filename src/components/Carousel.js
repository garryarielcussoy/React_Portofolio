import React from 'react'
import serbaBukuLogo from '../img/SerbaBuku.png'
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import axios from 'axios'
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";

class Carousel extends React.Component{
    render(){
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-2 col-sm-1'></div>
                    <div className='col-md-8 col-sm-10 advertisement-container'>
                        <span className='W1 flash'>W</span>
                        <span className='e2 flash'>E</span>
                        <span className='L3 flash'>L</span>
                        <span className='C4 flash'>C</span>
                        <span className='O5 flash'>O</span>
                        <span className='M6 flash'>M</span>
                        <span className='e7 flash'>E</span>
                        <p className='sambutan'>Selamat datang di SerbaBuku, surganya pecinta buku. Di sini, kamu bisa
                        mencari buku-buku yang sesuai seleramu, ataupun berbagi buku favoritmu kepada
                        orang lain.
                        </p>
                    </div>
                    <div className='col-md-2 col-sm-1'></div>
                </div>
            </div>
        )
    }
}

export default connect("", actions)(withRouter(Carousel));