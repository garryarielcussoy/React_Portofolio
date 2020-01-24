import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";

class RegisterComponent extends React.Component{
    // Handling register session
    toHandleRegister = async () => {
        await this.props.handleRegister()

        // When success, redirect to login page
        if (this.props.isValid === true){
            this.props.history.push('/login')   
        }

        // When fail, stay in the page
        else if (this.props.isValid === false){
            this.props.history.push('/daftar')   
        }
    }
    
    render(){
        return (
            <React.Fragment>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4 col-1'></div>
                        <div className='col-md-4 col-10 register-container'>
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
                            <button type="submit" style={{width: "200px"}} class="btn btn-outline-secondary search-button" onClick={() => this.toHandleRegister()}>Daftar</button>
                        </form>
                        </div>
                        <div className='col-md-4 col-1'></div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default connect("isValid", actions)(withRouter(RegisterComponent));