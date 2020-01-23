import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";

class ProfileComponent extends React.Component{
    // Logout session
    handleLogout = async () => {
        await this.props.handleLogout()
        alert("Sukses Logout")
        this.props.history.push('/')
    }
    
    render(){
        return(
            <React.Fragment>
                <div className='container-fluid'>
                    <div className='row profile-biodata-container'>
                        <div className='col-md-3 col-sm-12'></div>
                        
                        {/* ----- Profile Photo ----- */}
                        <div className='col-md-3 col-sm-12 profile-photo-username'>
                            <div className='profile-photo-wrapper'>
                                <img src={this.props.profileUserData.fotoProfil} />
                                <p className='username-text'><b>{this.props.profileUserData.username}</b></p>
                            </div>
                        </div>

                        {/* ----- Biodata ----- */}
                        <div className='col-md-4 col-sm-12'>
                        <p className='profile-text'><b>{this.props.profileUserData.namaLengkap}</b></p>
                        <p className='profile-text'>{this.props.profileUserData.email}</p>
                        <p className='profile-text'>{this.props.profileUserData.nomorHp}</p>
                        <p className='profile-text'>{this.props.profileUserData.alamat}</p>
                        </div>

                        <div className='col-md-2 col-sm-12'></div>
                        <div className='col-md-5 col-sm-12'></div>
                        <div className='col-md-2 col-sm-12 logout-button-container'>
                        <button type='button' style={{width: "100px"}} onClick={() => this.handleLogout()} className='btn btn-primary logout-button'>Logout</button>
                        </div>
                        <div className='col-md-5 col-sm-12'></div>
                        
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default connect("profileUserData", actions)(withRouter(ProfileComponent));