import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";

import firstPoster from "../img/firstPoster.jpg"
import secondPoster from "../img/secondPoster.jpg"

const Carousel = () => {
    return (
        <React.Fragment>
            <h1 className='welcome-message'>Selamat datang di SerbaBuku</h1>
            <div className="container carousel-container">
                <div id="myCarousel" className="carousel slide carousel-content-container" data-ride="carousel">
                    {/* -- Wrapper for slides -- */}
                    <div className="carousel-inner">
                        <div className="item active carousel-content">
                            <img src={firstPoster} alt="First Poster" style={{width: "100%"}} />
                        </div>

                        <div className="item carousel-content">
                            <img src={secondPoster} alt="Second Poster" style={{width: "100%"}} />
                        </div>
                    </div>

                    {/* -- Left and right controls -- */}
                    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                    <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </React.Fragment>
    )
    
    // return (
    //     <div className='container-fluid'>
    //         <div className='row'>
    //             <div className='col-md-2 col-sm-1'></div>
    //             <div className='col-md-8 col-sm-10 advertisement-container'>
                    
    //                 {/* ----- Welcome Keyframes ----- */}
    //                 <span className='W1 flash'>W</span>
    //                 <span className='eTwo flash'>E</span>
    //                 <span className='L3 flash'>L</span>
    //                 <span className='C4 flash'>C</span>
    //                 <span className='O5 flash'>O</span>
    //                 <span className='M6 flash'>M</span>
    //                 <span className='eSeven flash'>E</span>
                    
    //                 <p className='sambutan'>Selamat datang di SerbaBuku, surganya pecinta buku. Di sini, kamu bisa
    //                 mencari buku-buku yang sesuai seleramu, ataupun berbagi buku favoritmu kepada
    //                 orang lain.
    //                 </p>
    //             </div>
    //             <div className='col-md-2 col-sm-1'></div>
    //         </div>
    //     </div>
    // )
}

export default connect("", actions)(withRouter(Carousel));