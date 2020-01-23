import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";

const SearchAndFilter = (props) => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 search-filter-area'>
                    <h6 className='cari-buku'>Cari Buku</h6>
                    <form onSubmit={(e) => props.handleSubmit(e)}>
                        <div className="form-group">
                            <input onChange={e => props.handleChange(e)} type="text" class="form-control" name="judulBuku" id="judulBuku" aria-describedby="judulBuku" placeholder="Judul Buku" />
                        </div>
                        <div className="form-group">
                            <input onChange={e => props.handleChange(e)} type="text" class="form-control" name="namaUserPenjual" id="namaUserPenjual" aria-describedby="namaUserPenjual" placeholder="Nama User Penjual" />
                        </div>
                        <div className="form-group">
                            <input onChange={e => props.handleChange(e)} type="text" class="form-control" name="penerbit" id="penerbit" aria-describedby="penerbit" placeholder="Penerbit" />
                        </div>
                        <div className="form-group">
                            <input onChange={e => props.handleChange(e)} type="text" class="form-control" name="pengarang" id="pengarang" aria-describedby="pengarang" placeholder="Pengarang" />
                        </div>
                        <div className="form-group">
                            <input onChange={e => props.handleChange(e)} type="text" class="form-control" name="idBuku" id="idBuku" aria-describedby="idBuku" placeholder="ID Buku" />
                        </div>
                        <div className="form-group">
                            <input onChange={e => props.handleChange(e)} type="text" class="form-control" name="nomorIsbn" id="nomorIsbn" aria-describedby="nomorIsbn" placeholder="Nomor ISBN" />
                        </div>
                        <button type="submit" style={{width: "200px"}} className="btn btn-outline-secondary search-button" onClick={() => props.handleSearch()}>Cari</button>
                    </form>
                    <h6 className='kategori'>Kategori</h6>
                    <form className='input-user-form' onSubmit={(e) => props.handleSubmit(e)}>
                        <div className='form-group'>
                            <label for='category'></label>
                            <select onChange={e => props.handleChange(e)} name='category' className='category' id='category'>
                                <option>Umum</option>
                                <option>Sosial</option>
                                <option>Sains dan Matematika</option>
                                <option>Teknologi</option>
                                <option>Sastra</option>
                            </select>
                        </div>
                        <button type='submit' style={{width: "200px"}} className='btn btn-outline-secondary search-button' onClick={() => props.handleFilter()}>Cari</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default connect("", actions)(withRouter(SearchAndFilter));