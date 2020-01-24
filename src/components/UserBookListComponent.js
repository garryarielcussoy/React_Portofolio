import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";

class UserBookListComponent extends React.Component{
    // Redirect to form for editting book
    editBook = async (bookId) => {
        await this.props.prepareEditBook(bookId)
        this.props.history.push("/users/profile/edit-buku")
    }

    // Handling delete book
    deleteBook = async (bookId) => {
        await this.props.deleteBook(bookId)
        this.props.showProfile()
    }

    // Show or hide books list
    toggleDisplay = async () => {
        if (this.props.showBookList === false){
            await store.setState({showBookList: true})
        }
        else {
            await store.setState({showBookList: false})
        }
    }
    
    render(){
        // Get all his/her books list
        const bookList = this.props.bookList

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
                                        <h5 className='profile-title'>LIST BUKU</h5>
                                        {this.props.showBookList === true ?
                                        <div className='container-fluid'>
                                            <div className='row'>
                                                {bookList.length === 0 ? <div className='col-12 still-empty'>Kamu belum menambahkan buku apapun untuk dijual</div>:<React.Fragment></React.Fragment>}
                                                {bookList.map(book => 
                                                <div className='col-12 each-book-container-profile'>
                                                    <div className='container-fluid'>
                                                        <div className='row'>
                                                            <div className='col-md-2 col-sm12 each-book-photo-wrapper'>
                                                                <img alt="" src={book.foto_buku} />
                                                            </div>
                                                            <div className='col-md-5 col-sm-12'>
                                                            <p className='book-list-text'><b>Judul Buku</b>: {book.judul_buku}</p>
                                                            <p className='book-list-text'><b>ID Buku</b>: {book.id_buku}</p>
                                                            <p className='book-list-text'><b>Penerbit</b>: {book.penerbit}</p>
                                                            <p className='book-list-text'><b>Pengarang</b>: {book.pengarang}</p>
                                                            <p className='book-list-text'><b>Nomor ISBN</b>: {book.nomor_isbn}</p>
                                                            </div>
                                                            <div className='col-md-5 col-sm-12'>
                                                            <p className='book-list-text'><b>Kategori</b>: {book.kategori}</p>
                                                            <p className='book-list-text'><b>Harga Satuan</b>: Rp {book.harga_satuan}</p>
                                                            <p className='book-list-text'><b>Stok</b>: {book.stok}</p>
                                                            <p className='book-list-text'><b>Deskripsi</b>:<br />{book.deskripsi_buku}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button type='button' onClick={() => this.editBook(book.id_buku)} className='btn btn-outline-secondary edit-book-button'>Edit</button>
                                                    <button type='button' onClick={() => this.deleteBook(book.id_buku)} className='btn btn-outline-secondary delete-book-button'>Hapus</button>
                                                </div>    
                                                )}
                                                <div className='col-12 add-book-button-container'>
                                                <Link to='/users/profile/tambah'><button type='button' className='btn btn-outline-secondary add-book-button'>Tambah Buku</button></Link>
                                                </div>
                                            </div>
                                        </div>:
                                        <div></div>
                                        }
                                    </div>
                                    {this.props.showBookList === false ?
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

export default connect("showBookList, bookList", actions)(withRouter(UserBookListComponent));