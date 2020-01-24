import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";

import background1 from "../img/Background1.jpg"
import background2 from "../img/Background2.jpg"

const Carousel = () => {
    return (
        <React.Fragment>
            <div className="container">
                <h2>Carousel Example</h2>  
                <div id="myCarousel" className="carousel slide carousel-container" data-ride="carousel">
                    {/* <!-- Indicators --> */}
                    <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    </ol>

                    {/* <!-- Wrapper for slides --> */}
                    <div className="carousel-inner">
                    <div className="item active">
                        <img src={background2} alt="Los Angeles" style={{width: "100%"}} />
                    </div>

                    <div className="item">
                        <img src={background1} alt="Chicago" style={{width: "100%"}} />
                    </div>
                    </div>

                    {/* <!-- Left and right controls --> */}
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