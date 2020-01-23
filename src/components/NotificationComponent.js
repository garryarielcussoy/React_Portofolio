import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";

class NotificationComponent extends React.Component{
    // Handling reject order case
    rejectOrder = async (notificationId) => {
        await this.props.rejectOrder(notificationId)
        this.props.showProfile()
    }

    // Handling accept order case
    acceptOrder = async (notificationId) => {
        await this.props.acceptOrder(notificationId)
        this.props.showProfile()
    }

    // Show or hide notifications list
    toggleDisplay = async () => {
        if (this.props.showNotifications === false){
            await store.setState({showNotifications: true})
        }
        else {
            await store.setState({showNotifications: false})
        }
    }
    
    render(){
        const notificationList = this.props.notificationList
        return (
            <React.Fragment>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-1 col-sm-12'></div>
                        <div className='col-md-10 col-sm-12 notification-container'>
                            <div className='container-fluid'>
                                <div className='row'>
                                    <div className='col-md-1 col-sm-12'></div>
                                    <div className='col-md-10 col-sm-10'>
                                    <h5 className='profile-title'>

                                        {/* ----- Notification Icon ----- */}
                                        {notificationList.length !== 0 ?
                                        <span className='notification-circle'>oi</span> :
                                        <span></span>
                                        }
                                        PESANAN MASUK

                                    </h5>
                                        
                                        {/* ----- Show Notifications ----- */}
                                        {this.props.showNotifications === true ?
                                        <div className='container-fluid'>
                                            <div className='row'>
                                                {notificationList.length === 0 ? <div className='col-12 still-empty'>Tidak ada pesanan masuk</div>:<React.Fragment></React.Fragment>}
                                                {notificationList.map(notification => 
                                                <div className='col-12 each-notification-list'>
                                                    <div className='container-fluid'>
                                                        <div className='row'>
                                                            <div className='col-md-6 col-sm-12 transaction-section'>
                                                            <p className='notification-text'><b>ID Transaksi:</b> {notification.id_transaksi} ({notification.waktu_masuk_pesanan})</p>
                                                            <p className='notification-text'><b>Username Pembeli</b>: {notification.data_pembeli.username}</p>
                                                            <p className='notification-text'><b>Nomor HP</b>: {notification.data_pembeli.nomor_hp}</p>
                                                            <p className='notification-text'><b>Alamat</b>: {notification.data_pembeli.alamat}</p>
                                                            <p className='notification-text'><b>Jumlah Pembelian</b>: {notification.jumlah_pembelian}</p>
                                                            <p className='notification-text'><b>Total Harga</b>: Rp {notification.total_harga}</p>
                                                            <div className='accept-reject-container'>
                                                                <button onClick={() => this.rejectOrder(notification.id_transaksi)} type='button' className='btn btn-primary reject-order-button'>Tolak</button>
                                                                <button onClick={() => this.acceptOrder(notification.id_transaksi)} type='button' className='btn btn-primary accept-order-button'>Terima</button>
                                                            </div>
                                                            </div>
                                                            <div className='col-md-6 col-sm-12'>
                                                                <div className='container-fluid'>
                                                                    <div className='row'>
                                                                        {notification.detail_transaksi.map(detail => 
                                                                            <div className='col-12 each-detail-container'>
                                                                                <p className='notification-text'><b>Judul Buku</b>: {detail.judul_buku}</p>
                                                                                <p className='notification-text'><b>Jumlah Beli</b>: {detail.jumlah_pembelian}</p>
                                                                                <p className='notification-text'><b>Total Harga</b>: Rp {detail.total_harga}</p>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>  
                                                )}
                                            </div>
                                        </div>:
                                        <div></div>
                                        }
                                    </div>
                                    {this.props.showNotifications === false ?
                                    <div className='col-md-1 col-sm-2'><h5 className='toggle-display'><a onClick={() => this.toggleDisplay()}>V</a></h5></div>:
                                    <div className='col-md-1 col-sm-2'><h5 className='toggle-display'><a onClick={() => this.toggleDisplay()}>X</a></h5></div>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='col-md-1 col-sm-12'></div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default connect("notificationList, showNotifications", actions)(withRouter(NotificationComponent));