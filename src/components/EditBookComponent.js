import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";

class EditBookComponent extends React.Component{    
    // Handling case when user click edit book
    editBook = async () => {
        await this.props.editBook(this.props.bookIdEdit)
        // Case when user succesfully edit book (without missing requirement fields)
        if(this.props.successEditBook === true){
            this.props.history.push('/users/profile')
            this.props.showProfile()
        }
    }
    
    render(){
        return (
            <React.Fragment>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4 col-1'></div>
                        <div className='col-md-4 col-10 register-container'>
                        <h4 className='register-text'>EDIT BUKU</h4>
                        <form onSubmit={(e) => this.props.handleSubmit(e)}>
                            <div className="form-group">
                                <input onChange={e => this.props.handleChange(e)} type="text" class="form-control" value={this.props.judulBukuEdit} name="judulBukuEdit" id="judulBukuEdit" aria-describedby="judulBukuEdit" placeholder="Judul Buku" />
                            </div>
                            <div className="form-group">
                                <input onChange={e => this.props.handleChange(e)} type="text" class="form-control" value={this.props.pengarangEdit} name="pengarangEdit" id="pengarangEdit" aria-describedby="pengarangEdit" placeholder="Pengarang" />
                            </div>
                            <div className="form-group">
                                <input onChange={e => this.props.handleChange(e)} type="text" class="form-control" value={this.props.penerbitEdit} name="penerbitEdit" id="penerbitEdit" aria-describedby="penerbitEdit" placeholder="Penerbit" />
                            </div>
                            <div className="form-group">
                                <input onChange={e => this.props.handleChange(e)} type="text" class="form-control" value={this.props.nomorIsbnEdit} name="nomorIsbnEdit" id="nomorIsbnEdit" aria-describedby="nomorIsbnEdit" placeholder="Nomor ISBN" />
                            </div>
                            <div className="form-group">
                                <input onChange={e => this.props.handleChange(e)} type="text" class="form-control" value={this.props.fotoBukuEdit} name="fotoBukuEdit" id="fotoBukuEdit" aria-describedby="fotoBukuEdit" placeholder="Foto Buku" />
                            </div>
                            <div className="form-group">
                                <input onChange={e => this.props.handleChange(e)} type="text" class="form-control" value={this.props.stokEdit} name="stokEdit" id="stokEdit" aria-describedby="stokEdit" placeholder="Stok" />
                            </div>
                            <div className="form-group">
                                <input onChange={e => this.props.handleChange(e)} type="text" class="form-control" value={this.props.hargaSatuanEdit} name="hargaSatuanEdit" id="hargaSatuanEdit" aria-describedby="hargaSatuanEdit" placeholder="Harga Satuan" />
                            </div>
                            <div className='form-group'>
                                <label for='categoryEdit'>Kategori</label><br />
                                <select value={this.props.categoryEdit} onChange={e => this.props.handleChange(e)} name='categoryEdit' className='categoryEdit' id='categoryEdit'>
                                    <option>Umum</option>
                                    <option>Sosial</option>
                                    <option>Sains dan Matematika</option>
                                    <option>Teknologi</option>
                                    <option>Sastra</option>
                                </select>
                            </div>
                            <div className='form-group'>
                                <label for='deskripsiBukuEdit'>Deskripsi Buku<br />
                                    <textarea value={this.props.deskripsiBukuEdit} onChange={e => this.props.handleChange(e)} name="deskripsiBukuEdit" className='deskripsiBukuEdit' id="deskripsiBukuEdit" rows="3" cols="30"></textarea>
                                </label>
                            </div>
                            <button type="submit" class="btn btn-outline-secondary search-button" onClick={() => this.editBook()}>Edit Buku</button>
                        </form>
                        </div>
                        <div className='col-md-4 col-1'></div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default connect("bookIdEdit, judulBukuEdit, pengarangEdit, penerbitEdit, nomorIsbnEdit, categoryEdit, fotoBukuEdit, hargaSatuanEdit, stokEdit, deskripsiBukuEdit, successEditBook", actions)(withRouter(EditBookComponent));