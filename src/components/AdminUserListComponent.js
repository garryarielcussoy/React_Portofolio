import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";

class AdminUserListComponent extends React.Component{
    // Handling the case when admin press delete button to delete user
    deleteUser = async (userId) => {
        await this.props.deleteUser(userId)
        this.props.handleAdmin()
    }
    
    render(){
        // Get all users list
        const userList = this.props.adminUserList
        
        return (
            <React.Fragment>
                <h4 className='admin-title'>USER LIST</h4>
                <div className='container-fluid admin-user-container'>
                    <div className='row'>
                        
                        {/* ----- Table Header ----- */}
                        <div className='col-1'></div>
                        <div className='col-1 header-cell'>ID</div>
                        <div className='col-1 header-cell'>Username</div>
                        <div className='col-2 header-cell'>Nama Lengkap</div>
                        <div className='col-2 header-cell'>Email</div>
                        <div className='col-2 header-cell'>Alamat</div>
                        <div className='col-1 header-cell'>Nomor HP</div>
                        <div className='col-1 right-most-cell header-cell'>Hapus</div>
                        <div className='col-1'></div>

                        {/* ----- Table Content ------ */}
                        {userList.map(user => 
                            <React.Fragment>
                                <div className='col-1'></div>
                                <div className='col-1 content-cell'><div>{user.user_id}</div></div>
                                <div className='col-1 content-cell'>{user.username}</div>
                                <div className='col-2 content-cell'>{user.nama_lengkap}</div>
                                <div className='col-2 content-cell'>{user.email}</div>
                                <div className='col-2 content-cell'>{user.alamat}</div>
                                <div className='col-1 content-cell'>{user.nomor_hp}</div>
                                <div className='col-1 right-most-cell content-cell'>
                                    { user.status === "terhapus" ?
                                    <span>Terhapus</span>:
                                    <button type='button' onClick={() => this.deleteUser(user.user_id)} className='delete-user-button btn-sm btn-outline-secondary'>Hapus</button>
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

export default connect("adminUserList", actions)(withRouter(AdminUserListComponent));