import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import axios from 'axios'
import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";

import emptyCartLogo from '../img/emptyCart.png'

const localHost = 'http://0.0.0.0:4000/';

class CartPageComponent extends React.Component{
    toBookDetail = (bookId) => {
        this.props.clickBookDetailUser(bookId)
        this.props.history.push("/users/buku/" + bookId)
    }

    sentOrder = () => {
        this.props.sentCart()
        this.props.history.push("/users")
    }
    
    render(){
        const cartList = this.props.cartList
        if (cartList.length !== 0){
            return (
                <React.Fragment>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-md-2 col-sm-12'></div>
                            <div className='col-md-8 col-sm-12 '>
                                <div className='container-fluid'>
                                    <div className='row cart-container'>
                                        {cartList.map((cart) => 
                                        <React.Fragment>
                                            <div className='col-12 each-cart-info-container'>
                                                <div className='container-fluid'>
                                                    <div className='row'>
                                                        <div className='col-md-2 cart-book-image-wrapper col-sm-12'>
                                                            <img src={cart.informasi_buku.foto_buku} />
                                                        </div>
                                                        <div className='col-md-5 col-sm-12 cart-info-container'>
                                                        <p className='each-info-book-cart'><b>Judul Buku</b>: {cart.informasi_buku.judul_buku}</p>
                                                        <p className='each-info-book-cart'><b>ID Buku</b>: {cart.informasi_buku.id_buku}</p>
                                                        <p className='each-info-book-cart'><b>Penerbit</b>: {cart.informasi_buku.penerbit}</p>
                                                        <p className='each-info-book-cart'><b>Pengarang</b>: {cart.informasi_buku.pengarang}</p>
                                                        <p className='each-info-book-cart'><b>Nomor ISBN</b>: {cart.informasi_buku.nomor_isbn}</p>
                                                        </div>
                                                        <div className='col-md-5 col-sm-12 cart-info-container'>
                                                        <p className='each-info-book-cart'><b>Jumlah Beli</b>: {cart.detail_transaksi.jumlah_pembelian}</p>
                                                        <p className='each-info-book-cart'><b>Harga Satuan</b>: Rp {cart.informasi_buku.harga_satuan}</p>
                                                        <p className='each-info-book-cart'><b>Harga Total</b>: Rp {cart.detail_transaksi.total_harga}</p>
                                                        <button onClick={() => this.toBookDetail(cart.informasi_buku.id_buku)} type='button' className='btn btn-primary look-detail-cart'>Lihat Detail</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </React.Fragment>
                                        )}
                                    </div>
                                </div>
                                <div className='container-fluid'>
                                    <div className='row checkout-container'>
                                        <div className='col-md-7 col-sm-12'>
                                        <p className='each-info-book-cart'><b>Username Penjual</b>: {this.props.usernamePenjualCart}</p>
                                        <p className='each-info-book-cart'><b>Nomor HP</b>: {this.props.nomorHpCart}</p>
                                        <p className='each-info-book-cart'><b>Alamat</b>: {this.props.alamatCart}</p>
                                        </div>
                                        <div className='col-md-5 col-sm-12'>
                                        <p className='each-info-book-cart'><b>Jumlah Pembelian</b>: {this.props.jumlahPembelian}</p>
                                        <p className='each-info-book-cart'><b>Total Harga</b>: Rp {this.props.totalHarga}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 order-button-container'>
                                    <button type='button' onClick={() => this.sentOrder()} className='btn btn-primary order-now-button'>Pesan Sekarang</button>
                                </div>
                            </div>
                            <div className='col-md-2 col-sm-12'></div>
                        </div>
                    </div>
                </React.Fragment>
            )
        }

        else if(cartList.length === 0 | cartList === undefined){
            return (
                <React.Fragment>
                    <h4 className='empty-cart'>Kamu belum menambahkan apapun ke dalam keranjang</h4>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-md-5 col-sm-12'></div>
                            <div className='col-md-2 col-sm-12 empty-cart-logo-wrapper'>
                                <img src={emptyCartLogo} />
                            </div>
                            <div className='col-md-5 col-sm-12'></div>
                        </div>
                    </div>
                </React.Fragment>
            )
        }
    }
        
}

export default connect("judulBuku, namaUserPenjual, penerbit, pengarang, nomorIsbn, idBuku, category, isLoading, daftarBuku, isSearch, isFilter, dataDetilBuku, dataDetilPenjual, isLogin, cartList, totalHarga, jumlahPembelian, usernamePenjualCart, alamatCart, nomorHpCart", actions)(withRouter(CartPageComponent));