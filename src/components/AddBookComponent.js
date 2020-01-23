import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";

class AddBookComponent extends React.Component{    
    // Handling function for adding a new book
    addBook = async () => {
        await this.props.addBook()

        // If the proccess going well, redirect to profile page, otherwise stay in the page
        if (this.props.successAddBook === true){
            this.props.history.push('/users/profile')
            this.props.showProfile()
        }
    }
    
    render(){
        return (
            <React.Fragment>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-4 col-sm-12'></div>
                        <div className='col-md-4 col-sm-12 register-container'>
                        <h4 className='register-text'>TAMBAH BUKU</h4>
                        <form onSubmit={(e) => this.props.handleSubmit(e)}>
                            <div className="form-group">
                                <input onChange={e => this.props.handleChange(e)} type="text" class="form-control" name="judulBukuAdd" id="judulBukuAdd" aria-describedby="judulBukuAdd" placeholder="Judul Buku" />
                            </div>
                            <div className="form-group">
                                <input onChange={e => this.props.handleChange(e)} type="text" class="form-control" name="pengarangAdd" id="pengarangAdd" aria-describedby="pengarangAdd" placeholder="Pengarang" />
                            </div>
                            <div className="form-group">
                                <input onChange={e => this.props.handleChange(e)} type="text" class="form-control" name="penerbitAdd" id="penerbitAdd" aria-describedby="penerbitAdd" placeholder="Penerbit" />
                            </div>
                            <div className="form-group">
                                <input onChange={e => this.props.handleChange(e)} type="text" class="form-control" name="nomorIsbnAdd" id="nomorIsbnAdd" aria-describedby="nomorIsbnAdd" placeholder="Nomor ISBN" />
                            </div>
                            <div className="form-group">
                                <input onChange={e => this.props.handleChange(e)} type="text" class="form-control" name="fotoBukuAdd" id="fotoBukuAdd" aria-describedby="fotoBukuAdd" placeholder="Foto Buku" />
                            </div>
                            <div className="form-group">
                                <input onChange={e => this.props.handleChange(e)} type="text" class="form-control" name="stokAdd" id="stokAdd" aria-describedby="stokAdd" placeholder="Stok" />
                            </div>
                            <div className="form-group">
                                <input onChange={e => this.props.handleChange(e)} type="text" class="form-control" name="hargaSatuanAdd" id="hargaSatuanAdd" aria-describedby="hargaSatuanAdd" placeholder="Harga Satuan" />
                            </div>
                            <div className='form-group'>
                                <label for='categoryAdd'>Kategori</label><br />
                                <select onChange={e => this.props.handleChange(e)} name='categoryAdd' className='categoryAdd' id='categoryAdd'>
                                    <option>Umum</option>
                                    <option>Sosial</option>
                                    <option>Sains dan Matematika</option>
                                    <option>Teknologi</option>
                                    <option>Sastra</option>
                                </select>
                            </div>
                            <div className='form-group'>
                                <label for='deskripsiBukuAdd'>Deskripsi Buku<br />
                                    <textarea onChange={e => this.props.handleChange(e)} name="deskripsiBukuAdd" className='deskripsiBukuAdd' id="deskripsiBukuAdd" rows="3" cols="40"></textarea>
                                </label>
                            </div>
                            <button type="submit" class="btn btn-outline-secondary search-button" onClick={() => this.addBook()}>Tambah Buku</button>
                        </form>
                        </div>
                        <div className='col-md-4 col-sm-12'></div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default connect("isValid, successAddBook", actions)(withRouter(AddBookComponent));