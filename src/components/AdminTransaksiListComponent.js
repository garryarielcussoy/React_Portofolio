import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";

const AdminTransaksiListComponent = () => {
    // Get all transactions list (accepted, rejected, or in proccess)
    const transactionList = store.getState().adminTransaksiList

    return (
        <React.Fragment>
            <h4 className='admin-title'>TRANSACTIONS LIST</h4>
            <div className='container-fluid admin-transaction-container'>
                <div className='row'>

                    {/* ----- Table Header ----- */}
                    <div className='col-1'></div>
                    <div className='col-1 header-cell'>ID Transaksi</div>
                    <div className='col-1 header-cell'>ID Pembeli</div>
                    <div className='col-1 header-cell'>ID Penjual</div>
                    <div className='col-1 header-cell'>Waktu Beli</div>
                    <div className='col-1 header-cell'>Konfirmasi</div>
                    <div className='col-1 header-cell'>Status</div>
                    <div className='col-4 header-cell right-most-cell'>Detail Pembelian</div>
                    <div className='col-1'></div>

                    {/* ----- Table Content ----- */}
                    {transactionList.map(transaction => 
                        <React.Fragment>
                            <div className='col-1'></div>
                            <div className='col-1 content-cell'>{transaction.id_transaksi}</div>
                            <div className='col-1 content-cell'>{transaction.id_pembeli}</div>
                            <div className='col-1 content-cell'>{transaction.id_penjual}</div>
                            <div className='col-1 content-cell'>{transaction.waktu_pembelian === null ? <span>Dalam Keranjang</span> : <span>{transaction.waktu_pembelian}</span>}</div>
                            <div className='col-1 content-cell'>{transaction.waktu_konfirmasi === null ? <span>Dalam Proses</span> : <span>{transaction.waktu_konfirmasi}</span>}</div>
                            <div className='col-1 content-cell'>{transaction.status === null ? <span>Dalam Proses</span> : <span>{transaction.status}</span>}</div>
                            <div className='col-4 content-cell right-most-cell'>
                            <ul className='list-group list-group-flush'>
                                {transaction.detail_transaksi.map(detail => 
                                <li className='list-group-item detail-list'>{detail.judul_buku} ({detail.jumlah_pembelian} / Rp {detail.total_harga})</li>    
                                )}
                                </ul>
                            </div>
                            <div className='col-1'></div>
                        </React.Fragment>
                    )}
                </div>
            </div>
        </React.Fragment>
    )
}

export default connect("adminTransaksiList", actions)(withRouter(AdminTransaksiListComponent));