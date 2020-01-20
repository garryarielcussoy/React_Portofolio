import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import axios from 'axios'
import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";

class LoginComponent extends React.Component{
    toAdmin = async () => {
        await this.props.handleAdmin()
        this.props.history.push('/admin/users')
    }
    
    toHandleLogin = async () => {
        await this.props.handleLogin()
        if (this.props.usernameLogin === 'ADMIN' & this.props.isLogin === true){
            this.toAdmin()
        }
        else if (this.props.isLogin === false){
            this.props.history.push('/login')
        }
        else{
            this.props.history.push('/users')
        }
    }
    
    render(){
        return (
            <React.Fragment>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-4 col-sm-12'></div>
                        <div className='col-md-4 col-sm-12 login-container'>
                        <h4 className='login-text'>LOGIN</h4>
                        <form onSubmit={(e) => this.props.handleSubmit(e)}>
                            <div className="form-group">
                                <input onChange={e => this.props.handleChange(e)} type="text" class="form-control" name="usernameLogin" id="usernameLogin" aria-describedby="usernameLogin" placeholder="Username" />
                            </div>
                            <div className="form-group">
                                <input onChange={e => this.props.handleChange(e)} type="password" class="form-control" name="passwordLogin" id="passwordLogin" aria-describedby="passwordLogin" placeholder="Password" />
                            </div>
                            <button type="submit" class="btn btn-primary search-button" onClick={() => this.toHandleLogin()}>Login</button>
                        </form>
                        <div className='link-to-register-container'>
                            Belum punya akun?<br />
                            Daftar <a><Link to='/daftar'>disini</Link></a>
                        </div>
                        </div>
                        <div className='col-md-4 col-sm-12'></div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default connect("usernameLogin, passwordLogin, isLogin, tokenLogin", actions)(withRouter(LoginComponent));