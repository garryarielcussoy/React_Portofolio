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
            <h4 className='admin-title'>TRANSAKSI LIST</h4>
            <div className='container-fluid'>
                <div className='row'>

                    {/* ----- Table Header ----- */}
                    <div className='col-1'></div>
                    <div className='col-1 header-cell'>ID Transaksi</div>
                    <div className='col-1 header-cell'>ID Pembeli</div>
                    <div className='col-1 header-cell'>ID Penjual</div>
                    <div className='col-1 header-cell'>Waktu Beli</div>
                    <div className='col-1 header-cell'>Konfirmasi</div>
                    <div className='col-1 header-cell'>Status</div>
                    <div className='col-2 header-cell'>Judul Buku</div>
                    <div className='col-1 header-cell'>Total Beli</div>
                    <div className='col-1 right-most-cell header-cell'>Total Harga</div>
                    <div className='col-1'></div>

                    {/* ----- Table Content ----- */}
                    {transactionList.map(transaction => 
                        <React.Fragment>
                            <div className='col-1'></div>
                            <div className='col-1 content-cell'>{transaction.id_transaksi}</div>
                            <div className='col-1 content-cell'>{transaction.id_pembeli}</div>
                            <div className='col-1 content-cell'>{transaction.id_penjual}</div>
                            <div className='col-1 content-cell'>{transaction.waktu_pembelian}</div>
                            <div className='col-1 content-cell'>{transaction.waktu_konfirmasi}</div>
                            <div className='col-1 content-cell'>{transaction.status}</div>
                            <div className='col-2 content-cell'>
                                <div className='container-fluid'>
                                    <div className='row'>
                                        {transaction.detail_transaksi.map(detail => 
                                            <div className='col-12 inner-cell'>
                                                {detail.judul_buku}
                                            </div>  
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className='col-1 content-cell'>
                                <div className='container-fluid'>
                                    <div className='row'>
                                        {transaction.detail_transaksi.map(detail => 
                                            <div className='col-12 inner-cell'>
                                                {detail.jumlah_pembelian}
                                            </div>  
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className='col-1 content-cell right-most-cell'>
                                <div className='container-fluid'>
                                    <div className='row'>
                                        {transaction.detail_transaksi.map(detail => 
                                            <div className='col-12 inner-cell'>
                                                Rp {detail.total_harga}
                                            </div>  
                                        )}
                                    </div>
                                </div>
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