import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import axios from 'axios'
import { withRouter} from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";

import emptyShelf from "../img/emptyShelf.png"
import loadingGif from "../img/loading.gif"

class BookListPageComponent extends React.Component{
    // Handling the case when user click on a book (redirect user to the detail of the clicked book)
    toBookDetail = async (bookId) => {
        // For public
        if(this.props.isLogin === false){
            await this.props.clickBookDetail(bookId)
            await this.props.history.push('/public/buku/' + bookId)
        }
        // For signed in users
        else{
            await this.props.clickBookDetail(bookId)
            await this.props.history.push('/users/buku/' + bookId)
        }
    }

    componentDidMount = () => {
        const localHost = this.props.localHost;

        axios
            .get(localHost + "public/buku")
            .then(response => {
                store.setState({daftarBuku: response.data, isLoading: false})
            })
            .catch(response => {
                store.setState({isLoading: false})
            })
    }
    
    render(){
        // Get the list of all books that have at least one book
        const daftarBuku = this.props.daftarBuku

        // Loading session
        if (this.props.isLoading === true){
            return (
                <div className="loading">
                    <p>Memuat...</p>
                    <img src={loadingGif} alt=""/>
                </div>
            )
        }

        // What to be shown when the book(s) user looking for is not found
        else if(daftarBuku.length === 0){
            return (
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12 tidak-ketemu'>
                            Maaf, buku yang kamu cari tidak ditemukan
                        </div>
                        <div className='col-12 empty-shelf-wrapper'>
                            <img src={emptyShelf} alt=""/>
                        </div>
                    </div>
                </div>
            )
        }

        // Show all books (can be filtered)
        else {
            return (
                <React.Fragment>
                    <div className='container-fluid book-information-container'>
                        <div className='row'>
                            <div className='col-12'>
                                {/* ----- Search ----- */}
                                { this.props.isSearch === false ? 
                                <h4 className='daftar-buku-tersedia'>Daftar Buku Tersedia</h4> :
                                <h4 className='daftar-buku-tersedia'>Hasil Pencarian</h4>
                                }
                                {/* ----- Filter ----- */}
                                { this.props.isFilter === true ?
                                <h4 className='hasil-filter'>Berdasarkan Kategori : {this.props.activeCategory}</h4>:
                                <div></div>
                                }
                                </div>
                            
                            {/* ----- Looping to shows all books in list ----- */}
                            {daftarBuku.map((buku, index) => 
                                <div className='wrapper col-md-6 col-sm-6'>    
                                    <div className='each-book-container'>
                                        <a onClick={() => this.toBookDetail(buku.id_buku)} className='book-title'>{buku.judul_buku}</a>
                                        <div className='image-container-wrapper text-center'>    
                                            <div className='each-book-image-container text-center'>
                                                <img src={buku.foto_buku} alt="" />
                                            </div>
                                        </div>
                                        <div className='container-fluid'>
                                            <div className='row'>
                                                <div className='unstyled-col col-3'><p className='each-book-tag-left'><b>ID</b></p></div>
                                                <div className='unstyled-col-center col-1'><p className='each-book-tag-center'><b>:</b></p></div>
                                                <div className='unstyled-col col-7'><p className='each-book-tag-right'>{buku.id_buku}</p></div>
                                            </div>
                                        </div>
                                        <div className='container-fluid'>
                                            <div className='row'>
                                                <div className='unstyled-col col-3'><p className='each-book-tag-left'><b>Penjual</b></p></div>
                                                <div className='unstyled-col-center col-1'><p className='each-book-tag-center'><b>:</b></p></div>
                                                <div className='unstyled-col col-7'><p className='each-book-tag-right'>{buku.username_penjual}</p></div>
                                            </div>
                                        </div>
                                        <div className='container-fluid'>
                                            <div className='row'>
                                                <div className='unstyled-col col-3'><p className='each-book-tag-left'><b>Penerbit</b></p></div>
                                                <div className='unstyled-col-center col-1'><p className='each-book-tag-center'><b>:</b></p></div>
                                                <div className='unstyled-col col-7'><p className='each-book-tag-right'>{buku.penerbit}</p></div>
                                            </div>
                                        </div>
                                        <div className='container-fluid'>
                                            <div className='row'>
                                                <div className='unstyled-col col-3'><p className='each-book-tag-left'><b>Pengarang</b></p></div>
                                                <div className='unstyled-col-center col-1'><p className='each-book-tag-center'><b>:</b></p></div>
                                                <div className='unstyled-col col-7'><p className='each-book-tag-right'>{buku.pengarang}</p></div>
                                            </div>
                                        </div>
                                        <div className='container-fluid'>
                                            <div className='row'>
                                                <div className='unstyled-col col-3'><p className='each-book-tag-left'><b>ISBN</b></p></div>
                                                <div className='unstyled-col-center col-1'><p className='each-book-tag-center'><b>:</b></p></div>
                                                <div className='unstyled-col col-7'><p className='each-book-tag-right'>{buku.nomor_isbn}</p></div>
                                            </div>
                                        </div>
                                        <div className='container-fluid'>
                                            <div className='row'>
                                                <div className='unstyled-col col-3'><p className='each-book-tag-left'><b>Harga</b></p></div>
                                                <div className='unstyled-col-center col-1'><p className='each-book-tag-center'><b>:</b></p></div>
                                                <div className='unstyled-col col-7'><p className='each-book-tag-right'>{buku.harga_satuan}</p></div>
                                            </div>
                                        </div>
                                        <div className='container-fluid'>
                                            <div className='row'>
                                                <div className='unstyled-col col-3'><p className='each-book-tag-left'><b>Stok</b></p></div>
                                                <div className='unstyled-col-center col-1'><p className='each-book-tag-center'><b>:</b></p></div>
                                                <div className='unstyled-col col-7'><p className='each-book-tag-right'>{buku.stok}</p></div>
                                            </div>
                                        </div>
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

export default connect("activeCategory, daftarBuku, isSearch, isFilter, isLogin, isLoading, localHost", actions)(withRouter(BookListPageComponent));