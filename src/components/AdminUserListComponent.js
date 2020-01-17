import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import axios from 'axios'
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";

const localHost = 'http://0.0.0.0:4000/';

class AdminUserListComponent extends React.Component{
    deleteUser = async (userId) => {
        await this.props.deleteUser(userId)
        this.props.handleAdmin()
    }
    
    render(){
        const userList = this.props.adminUserList
        
        return (
            <React.Fragment>
                <h4 className='admin-title'>USER LIST</h4>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-1'></div>
                        <div className='col-1 header-cell'>ID</div>
                        <div className='col-1 header-cell'>Username</div>
                        <div className='col-1 header-cell'>Nama Lengkap</div>
                        <div className='col-1 header-cell'>Email</div>
                        <div className='col-2 header-cell'>Alamat</div>
                        <div className='col-1 header-cell'>Nomor HP</div>
                        <div className='col-1 header-cell'>Tanggal Bergabung</div>
                        <div className='col-1 header-cell'>Status</div>
                        <div className='col-1 right-most-cell header-cell'>Hapus</div>
                        <div className='col-1'></div>
                        {userList.map(user => 
                            <React.Fragment>
                                <div className='col-1'></div>
                                <div className='col-1 content-cell'>{user.user_id}</div>
                                <div className='col-1 content-cell'>{user.username}</div>
                                <div className='col-1 content-cell'>{user.nama_lengkap}</div>
                                <div className='col-1 content-cell'>{user.email}</div>
                                <div className='col-2 content-cell'>{user.alamat}</div>
                                <div className='col-1 content-cell'>{user.nomor_hp}</div>
                                <div className='col-1 content-cell'>{user.tanggal_bergabung}</div>
                                <div className='col-1 content-cell'>{user.status === null ? <span>None</span> : <span>{user.status}</span>}</div>
                                <div className='col-1 right-most-cell content-cell'>
                                    { user.status === "terhapus" ?
                                    <span>Terhapus</span>:
                                    <button type='button' onClick={() => this.deleteUser(user.user_id)} className='delete-user-button btn btn-danger'>Hapus</button>
                                    }
                                </div>
                                <div className='col-1'></div>
                            </React.Fragment>
                        )}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default connect("judulBuku, adminUserList, namaUserPenjual, penerbit, pengarang, nomorIsbn, idBuku, category, isLoading, daftarBuku, isSearch, isFilter, dataDetilBuku, dataDetilPenjual, adminUserList", actions)(withRouter(AdminUserListComponent));