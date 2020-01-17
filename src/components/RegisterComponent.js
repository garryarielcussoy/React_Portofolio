import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import axios from 'axios'
import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";

class RegisterComponent extends React.Component{
    toHandleRegister = async () => {
        await this.props.handleRegister()
        await console.warn("CHECK ISVALID", this.props.isValid)
        if (this.props.isValid === true){
            this.props.history.push('/login')   
        }
        else if (this.props.isValid === false){
            this.props.history.push('/daftar')   
        }
    }
    
    render(){
        return (
            <React.Fragment>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-4 col-sm-12'></div>
                        <div className='col-md-4 col-sm-12 register-container'>
                        <h4 className='register-text'>REGISTER</h4>
                        <form onSubmit={(e) => this.props.handleSubmit(e)}>
                            <div className="form-group">
                                <input onChange={e => this.props.handleChange(e)} type="text" class="form-control" name="emailRegister" id="emailRegister" aria-describedby="emailRegister" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <input onChange={e => this.props.handleChange(e)} type="text" class="form-control" name="usernameRegister" id="usernameRegister" aria-describedby="usernameRegister" placeholder="Username" />
                            </div>
                            <div className="form-group">
                                <input onChange={e => this.props.handleChange(e)} type="password" class="form-control" name="passwordRegister" id="passwordRegister" aria-describedby="passwordRegister" placeholder="Password (Minimal 6 Karakter)" />
                            </div>
                            <div className="form-group">
                                <input onChange={e => this.props.handleChange(e)} type="password" class="form-control" name="confirmPasswordRegister" id="confirmPasswordRegister" aria-describedby="confirmPasswordRegister" placeholder="Ulangi Password" />
                            </div>
                            <div className="form-group">
                                <input onChange={e => this.props.handleChange(e)} type="text" class="form-control" name="namaLengkapRegister" id="namaLengkapRegister" aria-describedby="namaLengkapRegister" placeholder="Nama Lengkap" />
                            </div>
                            <div className="form-group">
                                <input onChange={e => this.props.handleChange(e)} type="text" class="form-control" name="alamatRegister" id="alamatRegister" aria-describedby="alamatRegister" placeholder="Alamat" />
                            </div>
                            <div className="form-group">
                                <input onChange={e => this.props.handleChange(e)} type="text" class="form-control" name="nomorHpRegister" id="nomorHpRegister" aria-describedby="nomorHpRegister" placeholder="Nomor Hp" />
                            </div>
                            <div className="form-group">
                                <input onChange={e => this.props.handleChange(e)} type="text" class="form-control" name="fotoProfilRegister" id="fotoProfilRegister" aria-describedby="fotoProfilRegister" placeholder="Foto Profil" />
                            </div>
                            <button type="submit" class="btn btn-primary search-button" onClick={() => this.toHandleRegister()}>Daftar</button>
                        </form>
                        </div>
                        <div className='col-md-4 col-sm-12'></div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default connect("isValid", actions)(withRouter(RegisterComponent));