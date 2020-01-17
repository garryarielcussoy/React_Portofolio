import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import axios from 'axios'
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";

const localHost = 'http://0.0.0.0:4000/';

class BookDetailComponent extends React.Component{
    render(){
        console.warn("CHECK PROPS IN BOOK DETAIL COMPONENT", this.props)
        return (
            <React.Fragment>
                <div className='container-fluid book-detail-container'>
                    <div className='row'>
                        <div className='col-md-6 col-sm-12'>
                            <div className='container-fluid'>
                                <div className='row left-part-container'>
                                    <div className='col-md-3 col-sm-12 profile-seller-container'>
                                        <div className='profile-seller-wrapper'>
                                            <img src={this.props.dataDetilPenjual.fotoProfil} />
                                        </div>
                                    </div>
                                    <div className='col-md-7 col-sm-12 username-fullname-hp-wrapper'>
                                        <p><b>Username Penjual</b>: {this.props.dataDetilPenjual.username}</p>
                                        <p><b>Nama Lengkap Penjual</b>: {this.props.dataDetilPenjual.namaLengkap}</p>
                                        <p><b>Nomor HP Penjual</b>: {this.props.dataDetilPenjual.nomorHp}</p>
                                    </div>
                                    <div className='col-12 alamat-container'>
                                        <p><b>Alamat Penjual</b>:<br />{this.props.dataDetilPenjual.alamat}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-sm-12'>
                            <div className='container-fluid'>
                                <div className='row book-info-right'>
                                    <div className='col-12 book-title-right'>
                                    <p>{this.props.dataDetilBuku.judulBuku}</p>
                                    </div>
                                    <div className='col-md-4 col-sm-12 foto-buku-wrapper'>
                                        <img src={this.props.dataDetilBuku.fotoBuku} />
                                    </div>
                                    <div className='col-md-8 col-sm-12 book-information-list'>
                                        <p><b>Kategori</b>: {this.props.dataDetilBuku.kategori}</p>
                                        <p><b>ID Buku</b>: {this.props.dataDetilBuku.idBuku}</p>
                                        <p><b>Penerbit</b>: {this.props.dataDetilBuku.penerbit}</p>
                                        <p><b>Pengarang</b>: {this.props.dataDetilBuku.pengarang}</p>
                                        <p><b>ISBN</b>: {this.props.dataDetilBuku.nomorIsbn}</p>
                                        <p><b>Harga Satuan</b>: Rp {this.props.dataDetilBuku.hargaSatuan}</p>
                                        <p><b>Stok</b>: {this.props.dataDetilBuku.stok}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 deskripsi-container'>
                            <p><b>Deskripsi Buku</b>:<br />{this.props.dataDetilBuku.deskripsiBuku}</p>
                        </div>    
                    </div>
                </div>                
            </React.Fragment>
        )
    }
}

export default connect("judulBuku, namaUserPenjual, penerbit, pengarang, nomorIsbn, idBuku, category, isLoading, daftarBuku, isSearch, isFilter, dataDetilBuku, dataDetilPenjual", actions)(withRouter(BookDetailComponent));