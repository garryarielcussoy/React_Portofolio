import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";

const BookDetailComponent = (props) => {
    return (
        <React.Fragment>
            <div className='container book-detail-container'>
                <div className='row'>
                    
                    {/* ----- Showing seller information ----- */}
                    <div className='col-md-5 col-sm-12'>
                        <div className='container-fluid'>
                            <div className='row left-part-container'>
                                <div className='col-md-3 col-sm-12 profile-seller-container'>
                                    <div className='profile-seller-wrapper'>
                                        <img src={props.dataDetilPenjual.fotoProfil} />
                                    </div>
                                </div>
                                <div className='col-md-9 col-sm-12 username-fullname-hp-wrapper'>
                                    <div className='container-fluid'>
                                        <div className='row tag-container'>
                                            <div className='col-5 unstyled-col'><p className='each-book-tag'><b>Username</b></p></div>
                                            <div className='col-1 unstyled-col'><p className='each-book-tag'><b>:</b></p></div>
                                            <div className='col-6 unstyled-col'><p className='each-book-tag'>{props.dataDetilPenjual.username}</p></div>
                                        </div>
                                    </div>
                                    <div className='container-fluid'>
                                        <div className='row tag-container'>
                                            <div className='col-5 unstyled-col'><p className='each-book-tag'><b>Nama Lengkap</b></p></div>
                                            <div className='col-1 unstyled-col'><p className='each-book-tag'><b>:</b></p></div>
                                            <div className='col-6 unstyled-col'><p className='each-book-tag'>{props.dataDetilPenjual.namaLengkap}</p></div>
                                        </div>
                                    </div>
                                    <div className='container-fluid'>
                                        <div className='row tag-container'>
                                            <div className='col-5 unstyled-col'><p className='each-book-tag'><b>Nomor HP</b></p></div>
                                            <div className='col-1 unstyled-col'><p className='each-book-tag'><b>:</b></p></div>
                                            <div className='col-6 unstyled-col'><p className='each-book-tag'>{props.dataDetilPenjual.nomorHp}</p></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 alamat-container'>
                                    <p><b>Alamat Penjual</b><br />{props.dataDetilPenjual.alamat}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ----- Showing book informations ----- */}
                    <div className='col-md-7 col-sm-12'>
                        <div className='container-fluid'>
                            <div className='row book-info-right'>
                                <div className='col-12 book-title-right'>
                                <p>{props.dataDetilBuku.judulBuku}</p>
                                </div>
                                <div className='col-md-4 col-sm-12 foto-buku-wrapper'>
                                    <img src={props.dataDetilBuku.fotoBuku} />
                                </div>
                                <div className='col-md-8 col-sm-12 book-information-list'>
                                    <div className='container-fluid'>
                                        <div className='row detail-tag-container'>
                                            <div className='col-3 unstyled-col'><p className='each-tag-book-left'><b>Kategori</b></p></div>
                                            <div className='col-1 unstyled-col-center'><p><b>:</b></p></div>
                                            <div className='col-7 unstyled-col'><p>{props.dataDetilBuku.kategori}</p></div>
                                        </div>
                                        <div className='row detail-tag-container'>
                                            <div className='col-3 unstyled-col'><p className='each-tag-book-left'><b>ID Buku</b></p></div>
                                            <div className='col-1 unstyled-col-center'><p><b>:</b></p></div>
                                            <div className='col-7 unstyled-col'><p>{props.dataDetilBuku.idBuku}</p></div>
                                        </div>
                                        <div className='row detail-tag-container'>
                                            <div className='col-3 unstyled-col'><p className='each-tag-book-left'><b>Penerbit</b></p></div>
                                            <div className='col-1 unstyled-col-center'><p><b>:</b></p></div>
                                            <div className='col-7 unstyled-col'><p>{props.dataDetilBuku.penerbit}</p></div>
                                        </div>
                                        <div className='row detail-tag-container'>
                                            <div className='col-3 unstyled-col'><p className='each-tag-book-left'><b>Pengarang</b></p></div>
                                            <div className='col-1 unstyled-col-center'><p><b>:</b></p></div>
                                            <div className='col-7 unstyled-col'><p>{props.dataDetilBuku.pengarang}</p></div>
                                        </div>
                                        <div className='row detail-tag-container'>
                                            <div className='col-3 unstyled-col'><p className='each-tag-book-left'><b>ISBN</b></p></div>
                                            <div className='col-1 unstyled-col-center'><p><b>:</b></p></div>
                                            <div className='col-7 unstyled-col'><p>{props.dataDetilBuku.nomorIsbn}</p></div>
                                        </div>
                                        <div className='row detail-tag-container'>
                                            <div className='col-3 unstyled-col'><p className='each-tag-book-left'><b>Harga</b></p></div>
                                            <div className='col-1 unstyled-col-center'><p><b>:</b></p></div>
                                            <div className='col-7 unstyled-col'><p>Rp {props.dataDetilBuku.hargaSatuan}</p></div>
                                        </div>
                                        <div className='row detail-tag-container'>
                                            <div className='col-3 unstyled-col'><p className='each-tag-book-left'><b>Stok</b></p></div>
                                            <div className='col-1 unstyled-col-center'><p><b>:</b></p></div>
                                            <div className='col-7 unstyled-col'><p>{props.dataDetilBuku.stok}</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ----- Shwoing book description ----- */}
                    <div className='col-12 deskripsi-container'>
                        <p><b>Deskripsi Buku</b><br />{props.dataDetilBuku.deskripsiBuku}</p>
                    </div>    
                </div>
            </div>                
        </React.Fragment>
    )
}

export default connect("dataDetilBuku, dataDetilPenjual", actions)(withRouter(BookDetailComponent));