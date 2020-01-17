import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import axios from 'axios'
import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";

const localHost = 'http://0.0.0.0:4000/'

class SearchAndFilter extends React.Component{
    render(){
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 search-filter-area'>
                        <h6 className='cari-buku'>Cari Buku</h6>
                        <form onSubmit={(e) => this.props.handleSubmit(e)}>
                            <div className="form-group">
                                <input onChange={e => this.props.handleChange(e)} type="text" class="form-control" name="judulBuku" id="judulBuku" aria-describedby="judulBuku" placeholder="Judul Buku" />
                            </div>
                            <div className="form-group">
                                <input onChange={e => this.props.handleChange(e)} type="text" class="form-control" name="namaUserPenjual" id="namaUserPenjual" aria-describedby="namaUserPenjual" placeholder="Nama User Penjual" />
                            </div>
                            <div className="form-group">
                                <input onChange={e => this.props.handleChange(e)} type="text" class="form-control" name="penerbit" id="penerbit" aria-describedby="penerbit" placeholder="Penerbit" />
                            </div>
                            <div className="form-group">
                                <input onChange={e => this.props.handleChange(e)} type="text" class="form-control" name="pengarang" id="pengarang" aria-describedby="pengarang" placeholder="Pengarang" />
                            </div>
                            <div className="form-group">
                                <input onChange={e => this.props.handleChange(e)} type="text" class="form-control" name="idBuku" id="idBuku" aria-describedby="idBuku" placeholder="ID Buku" />
                            </div>
                            <div className="form-group">
                                <input onChange={e => this.props.handleChange(e)} type="text" class="form-control" name="nomorIsbn" id="nomorIsbn" aria-describedby="nomorIsbn" placeholder="Nomor ISBN" />
                            </div>
                            <button type="submit" class="btn btn-primary search-button" onClick={() => this.props.handleSearch()}>Cari</button>
                        </form>
                        <h6 className='kategori'>Kategori</h6>
                        <form className='input-user-form' onSubmit={(e) => this.props.handleSubmit(e)}>
                            <div className='form-group'>
                                <label for='category'></label>
                                <select onChange={e => this.props.handleChange(e)} name='category' className='category' id='category'>
                                    <option>Umum</option>
                                    <option>Sosial</option>
                                    <option>Sains dan Matematika</option>
                                    <option>Teknologi</option>
                                    <option>Sastra</option>
                                </select>
                            </div>
                            <button type='submit' className='btn btn-primary search-button' onClick={() => this.props.handleFilter()}>Cari</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect("judulBuku, namaUserPenjual, penerbit, pengarang, nomorIsbn, idBuku, category, isLoading, daftarBuku", actions)(withRouter(SearchAndFilter));