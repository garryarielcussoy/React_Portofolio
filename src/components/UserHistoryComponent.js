import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import axios from 'axios'
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";

const localHost = 'http://0.0.0.0:4000/';

class UserHistoryComponent extends React.Component{
    toggleDisplay = async () => {
        if (this.props.showHistory === false){
            await store.setState({showHistory: true})
        }
        else {
            await store.setState({showHistory: false})
        }
    }
    
    render(){
        const historyList = this.props.historyList
        return (
            <React.Fragment>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-1 col-sm-12'></div>
                        <div className='col-md-10 col-sm-12 notification-container'>
                            <div className='container-fluid'>
                                <div className='row'>
                                    <div className='col-md-1 col-sm-12'></div>
                                    <div className='col-md-10 col-sm-12'>
                                        <h5 className='profile-title'>HISTORY BELANJA</h5>
                                        {this.props.showHistory === true ?
                                        <div className='container-fluid'>
                                            <div className='row'>
                                                {historyList.length === 0 ? <div className='col-12 still-empty'>Kamu belum pernah belanja apapun. Ayo belanja sekarang!</div>:<React.Fragment></React.Fragment>}
                                                {historyList.map(history => 
                                                <div className='container-fluid each-history-container'>
                                                    <div className='row'>
                                                        <div className='col-md-6 col-sm-12 left-part-of-history'>
                                                        <p className='history-list-text'><b>ID Transaksi</b>: {history.id_transaksi}</p>
                                                        <p className='history-list-text'><b>Status</b>: {history.status}{history.status === null ? <span>dalam proses</span>:<span></span>}</p>
                                                        <p className='history-list-text'><b>Waktu Pembelian</b>: {history.waktu_pembelian}</p>
                                                        <p className='history-list-text'><b>Username Penjual</b>: {history.nama_penjual}</p>
                                                        <p className='history-list-text'><b>Jumlah Pembelian</b>: {history.waktu_pembelian}</p>
                                                        <p className='history-list-text'><b>Total Harga</b>: {history.waktu_pembelian}</p>
                                                        </div>
                                                        <div className='col-md-6 col-sm-12 right-part-of-history'>
                                                            <div className='container-fluid'>
                                                                <div className='row'>
                                                                    {history.detail_transaksi.map(detail => 
                                                                    <div className='col-12 each-right-part'>
                                                                        <p className='history-list-text'><b>Judul Buku</b>: {detail.judul_buku}</p>
                                                                        <p className='history-list-text'><b>Jumlah Beli</b>: {detail.jumlah_pembelian}</p>
                                                                        <p className='history-list-text'><b>Total Harga</b>: Rp {detail.total_harga}</p>
                                                                    </div>    
                                                                    )}
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
                                    {this.props.showHistory === false ?
                                    <div className='col-md-1 col-sm-12'><h5 className='toggle-display'><a onClick={() => this.toggleDisplay()}>V</a></h5></div>:
                                    <div className='col-md-1 col-sm-12'><h5 className='toggle-display'><a onClick={() => this.toggleDisplay()}>X</a></h5></div>
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

export default connect("judulBuku, namaUserPenjual, penerbit, pengarang, nomorIsbn, idBuku, category, isLoading, daftarBuku, isSearch, isFilter, dataDetilBuku, dataDetilPenjual, historyList, showHistory", actions)(withRouter(UserHistoryComponent));