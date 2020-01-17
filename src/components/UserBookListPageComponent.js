import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import axios from 'axios'
import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";

import emptyShelf from "../img/emptyShelf.png"
import loadingGif from "../img/loading.gif"

const localHost = 'http://0.0.0.0:4000/';

class UserBookListPageComponent extends React.Component{
    toBookDetail = async (bookId) => {
        if(this.props.isLogin === false){
            await this.props.clickBookDetail(bookId)
            await this.props.history.push('/public/buku/' + bookId)
        }
        else{
            await this.props.clickBookDetailUser(bookId)
            await this.props.history.push('/users/buku/' + bookId)
        }
    }

    componentDidMount = () => {
        const self = this;
        console.warn("CHECK TOKEN", this.props.tokenLogin)
        store.setState({isLoading: true})
        axios
            .get(localHost + "users/buku", {headers: {"Authorization" : "Bearer " + this.props.tokenLogin} })
            .then(function(response){
                console.warn("CHECK RESPONSE", response.data)
                store.setState({daftarBuku: response.data, isLoading: false})
            })
            .catch(function(response){
                store.setState({isLoading: false})
                console.warn('TES ERROR DID MOUNT USER')
            })
    }
    
    render(){
        const daftarBuku = this.props.daftarBuku
        if (this.props.isLoading === true){
            return (
                <div className="loading">
                    <p>Memuat...</p>
                    <img src={loadingGif}/>
                </div>
            )
        }
        else if(daftarBuku.length === 0){
            return (
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12 tidak-ketemu'>
                            Maaf, buku yang kamu cari tidak ditemukan
                        </div>
                        <div className='col-12 empty-shelf-wrapper'>
                            <img src={emptyShelf} />
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <React.Fragment>
                    <div className='container-fluid book-information-container'>
                        <div className='row'>
                            <div className='col-12'>
                                { this.props.isSearch === false ? 
                                <h4 className='daftar-buku-tersedia'>Daftar Buku Tersedia</h4> :
                                <h4 className='daftar-buku-tersedia'>Hasil Pencarian</h4>
                                }
                                { this.props.isFilter === true ?
                                <h4 className='hasil-filter'>Berdasarkan Kategori : {this.props.category}</h4>:
                                <div></div>
                                }
                                </div>
                            {daftarBuku.map((buku, index) => 
                                <div className='wrapper col-md-3 col-sm-6'>    
                                    <div className='each-book-container'>
                                        <a onClick={() => this.toBookDetail(buku.id_buku)} className='book-title'>{buku.judul_buku}</a>
                                        <div className='image-container-wrapper text-center'>    
                                            <div className='each-book-image-container text-center'>
                                                <img src={buku.foto_buku} />
                                            </div>
                                        </div>
                                        <p><b>Penjual</b> : {buku.username_penjual}</p>
                                        <p><b>Penerbit</b> : {buku.penerbit}</p>
                                        <p><b>Pengarang</b> : {buku.pengarang}</p>
                                        <p><b>ID Buku</b> : {buku.id_buku}</p>
                                        <p><b>ISBN</b> : {buku.nomor_isbn}</p>
                                        <p><b>Harga</b> : Rp {buku.harga_satuan}</p>
                                        <p><b>Stok</b> : {buku.stok}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </React.Fragment>
            )
        }
    }
}

export default connect("judulBuku, namaUserPenjual, penerbit, pengarang, nomorIsbn, idBuku, category, isLoading, daftarBuku, isSearch, isFilter, dataDetilBuku, dataDetilPenjual, isLogin, tokenLogin, isLoading", actions)(withRouter(UserBookListPageComponent));