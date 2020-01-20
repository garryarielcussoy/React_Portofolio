import createStore from 'unistore'
import axios from 'axios'
import { stat } from 'fs';
import { func } from 'prop-types';

const inisialization = {
    judulBuku: '',
    namaUserPenjual: '',
    penerbit: '',
    pengarang: '',
    nomorIsbn: '',
    idBuku: '',
    isLoading: true,
    daftarBuku: [],
    category: 'Umum',
    activeCategory: '',
    isSearch: false,
    isFilter: false,
    dataDetilPenjual: {
        username: '',
        nomorHp: '',
        alamat: '',
        namaLengkap: '',
        fotoProfil: ''
    },
    dataDetilBuku: {
        judulBuku: '',
        kategori: '',
        idBuku: '',
        penerbit: '',
        pengarang: '',
        nomorIsbn: '',
        hargaSatuan: '',
        stok: '',
        deskripsiBuku: '',
        fotoBuku: ''
    },
    emailRegister: '',
    usernameRegister: '',
    passwordRegister: '',
    confirmPasswordRegister: '',
    namaLengkapRegister: '',
    alamatRegister: '',
    nomorHpRegister: '',
    fotoProfilRegister: '',
    isValid: false,
    isLogin: false,
    usernameLogin: '',
    passwordLogin: '',
    tokenLogin: '',
    canAdd: '',
    placeholderStart: 0,
    cartList: [],
    jumlahPembelian: '',
    totalHarga: '',
    usernamePenjualCart: '',
    alamatCart: '',
    nomorHpCart: '',
    profileUserData: {
        alamat: '',
        email: '',
        fotoProfil: '',
        namaLengkap: '',
        nomorHp: '',
        username: ''
    },
    bookList: [],
    notificationList: [],
    historyList: [],
    showNotifications: false,
    showBookList: false,
    showHistory: false,
    judulBukuAdd: '',
    pengarangAdd: '',
    penerbitAdd: '',
    nomorIsbnAdd: '',
    fotoBukuAdd: '',
    stokAdd: '',
    hargaSatuanAdd: '',
    categoryAdd: 'Umum',
    deskripsiBukuAdd: '',
    judulBukuEdit: '',
    pengarangEdit: '',
    penerbitEdit: '',
    nomorIsbnEdit: '',
    fotoBukuEdit: '',
    stokEdit: '',
    hargaSatuanEdit: '',
    categoryEdit: 'Umum',
    deskripsiBukuEdit: '',
    bookIdEdit: '',
    adminUserList: [],
    adminTransaksiList: [],
    successAddBook: true,
    successEditBook: true,
    localHost = '13.229.61.125:5000/'
}

// const localHost = '13.229.61.125:5000/'
// const localHost = 'http://0.0.0.0:5000/'
const localHost = inisialization.localHost

export const store = createStore(inisialization)

export const actions = store => (
{
    handleChange: (state, event) => {
        console.warn(event.target.value)
        store.setState({[event.target.name]: event.target.value})
    },

    handleSubmit: (state, event) => {
        event.preventDefault()
    },

    increaseItem: (state, event) => {
        const placeholderStartNow = state.placeholderStart + 1
        store.setState({placeholderStart: placeholderStartNow})
    },

    decreaseItem: (state, event) => {
        if (state.placeholderStart >= 1){
            const placeholderStartNow = state.placeholderStart - 1
            store.setState({placeholderStart: placeholderStartNow})   
        }
    },

    addToCart: async (state, event) => {
        await axios({method: 'patch', url: localHost + "users/buku/" + state.dataDetilBuku.idBuku, headers: {"Authorization" : "Bearer " + state.tokenLogin}, data: {jumlah_pembelian: state.placeholderStart} })
            .then(function(response){
                store.setState({placeholderStart: 0})
                alert(response.data.message)
            })
            .catch(function(response){
                alert(response.message)
            })
    },

    showCart: async (state, event) => {
        await axios
            .get(localHost + "users/keranjang", {headers: {"Authorization" : "Bearer " + state.tokenLogin}})
            .then(function(response){
                store.setState({cartList: response.data.data_transaksi})
                store.setState({jumlahPembelian: response.data.jumlah_pembelian, totalHarga: response.data.total_harga, usernamePenjualCart: response.data.data_penjual.username, alamatCart: response.data.data_penjual.alamat, nomorHpCart: response.data.data_penjual.nomor_hp})
            })
            .catch(function(response){
            })
    },

    sentCart: async (state, event) => {
        await axios({method: 'put', url: localHost + "users/keranjang", headers: {"Authorization" : "Bearer " + state.tokenLogin}})
            .then(function(response){
                store.setState({cartList: []})
                alert(response.data.message)
            })
            .catch(function(response){
                alert(response.data.message)
            })
    },

    acceptOrder: async (state, notificationId) => {
        await axios({method: 'post', url: localHost + "users/profile", headers: {"Authorization" : "Bearer " + state.tokenLogin}, data: {transaction_id: notificationId, status: 'terima'}})
            .then(function(response){
                alert("Sukses menerima pesanan!")
            })
            .catch(function(response){
            })
    },

    rejectOrder: async (state, notificationId) => {
        await axios({method: 'post', url: localHost + "users/profile", headers: {"Authorization" : "Bearer " + state.tokenLogin}, data: {transaction_id: notificationId, status: 'tolak'}})
            .then(function(response){
                alert("Sukses menolak pesanan!")
            })
            .catch(function(response){
            })
    },

    handleRegister: async (state, event) => {
        const self = this
        const data = {
            email: state.emailRegister,
            username: state.usernameRegister,
            password: state.passwordRegister,
            confirm_password: state.confirmPasswordRegister,
            nama_lengkap: state.namaLengkapRegister,
            foto_profil: state.fotoProfilRegister,
            alamat: state.alamatRegister,
            nomor_hp: state.nomorHpRegister
        }
        await axios
            .post(localHost + 'register', data)
            .then(function(response){
                alert(response.data.message)
                if (response.data.message === 'Selamat! Akunmu sudah terdaftar sekarang'){
                    store.setState({isValid: true})
                    store.setState({emailRegister: '', passwordRegister: '', confirmPasswordRegister: '', namaLengkapRegister: '', fotoProfilRegister: '', alamatRegister: '', nomorHpRegister: ''})
                }
                else {
                    store.setState({isValid: false})
                }
            })
            .catch(function(response){
                store.setState({isValid: false})
                alert(response.data.message)
            })
    },

    handleLogin: async (state, event) => {
        const data = {
            username: state.usernameLogin,
            password: state.passwordLogin
        }
        
        await axios
            .post(localHost + 'login', data)
            .then(function(response){
                store.setState({isLogin: true, tokenLogin: response.data.token, isLoading: true})
                alert("Sukses Login!")
            })
            .catch(function(response){
                store.setState({tokenLogin: '', isLogin: false})
                alert("Username atau password yang kamu masukkan salah")
            })
    },

    handleAdmin: async (state, event) => {
        await axios({method: 'get', url: localHost + "admin/users", headers: {"Authorization" : "Bearer " + state.tokenLogin}})
            .then(function(response){
                store.setState({adminUserList: response.data})
            })
            .catch(function(response){
            })
    },

    showAdminTransaksi: async (state, event) => {
        await axios({method: 'get', url: localHost + "admin/transaksi", headers: {"Authorization" : "Bearer " + state.tokenLogin}})
            .then(function(response){
                store.setState({adminTransaksiList: response.data})
            })
            .catch(function(response){
            })
    },

    deleteUser: async (state, userId) => {
        await axios({method: 'delete', url: localHost + "admin/users", headers: {"Authorization" : "Bearer " + state.tokenLogin}, data: {user_id: userId}})
            .then(function(response){
                alert("Kamu telah menghapus user terkait")
            })
            .catch(function(response){
            })
    },

    handleLogout: async (state, event) => {
        store.setState(inisialization)
    },

    addBook: async (state, event) => {
        const data = {
            judul_buku: state.judulBukuAdd,
            pengarang: state.pengarangAdd,
            penerbit: state.penerbitAdd,
            nomor_isbn: state.nomorIsbnAdd,
            deskripsi_buku: state.deskripsiBukuAdd,
            kategori: state.categoryAdd,
            foto_buku: state.fotoBukuAdd,
            harga_satuan: state.hargaSatuanAdd,
            stok: state.stokAdd
        }
        await axios({method: 'post', url: localHost + "users/profile/tambah", headers: {"Authorization" : "Bearer " + state.tokenLogin}, data: data})
            .then(function(response){
                store.setState({successAddBook: true})
                alert("Kamu sukses menambahkan buku")
            })
            .catch(function(response){
                store.setState({successAddBook: false})
                if(state.judulBukuAdd === '' || state.pengarangAdd === '' || state.penerbitAdd === '' || state.deskripsiBukuAdd === '' || state.categoryAdd === '' || state.stokAdd === '' || state.hargaSatuanAdd === ''){
                    alert("Tidak boleh ada field yang dikosongkan (kecuali foto buku)")
                }
                else{
                    alert("Buku yang kamu ingin tambahkan sudah ada di daftar buku yang kamu jual saat ini")
                }
            })
    },

    deleteBook: async (state, bookId) => {
        await axios({method: 'delete', url: localHost + "users/profile/edit-buku/" + bookId, headers: {"Authorization" : "Bearer " + state.tokenLogin}})
            .then(function(response){
                alert("Kamu sukses menghapus buku")
            })
            .catch(function(response){
                alert(response.message)
            })
    },

    prepareEditBook: async (state, bookId) => {
        await axios({method: 'get', url: localHost + "users/profile/edit-buku/" + bookId, headers: {"Authorization" : "Bearer " + state.tokenLogin}})
        .then(function(response){
            store.setState({
                judulBukuEdit: response.data.judul_buku,
                penerbitEdit: response.data.penerbit,
                pengarangEdit: response.data.pengarang,
                nomorIsbnEdit: response.data.nomor_isbn,
                fotoBukuEdit: response.data.foto_buku,
                stokEdit: response.data.stok,
                hargaSatuanEdit: response.data.harga_satuan,
                categoryEdit: response.data.kategori,
                deskripsiBukuEdit: response.data.deskripsi_buku,
                bookIdEdit: bookId
            })
        })
        .catch(function(response){
        })
    },

    editBook: async (state, bookId) => {
        const data = {
            judul_buku: state.judulBukuEdit,
            pengarang: state.pengarangEdit,
            penerbit: state.penerbitEdit,
            nomor_isbn: state.nomorIsbnEdit,
            deskripsi_buku: state.deskripsiBukuEdit,
            kategori: state.categoryEdit,
            foto_buku: state.fotoBukuEdit,
            harga_satuan: state.hargaSatuanEdit,
            stok: state.stokEdit
        }
        await axios({method: 'put', url: localHost + "users/profile/edit-buku/" + bookId, headers: {"Authorization" : "Bearer " + state.tokenLogin}, data: data})        
        .then(function(response){
            store.setState({successEditBook: true})
            alert("Kamu sukses mengedit buku")
        })
        .catch(function(response){
            store.setState({successEditBook: false})
            alert("Tidak boleh ada field yang dikosongkan (kecuali foto buku)")
        })
    },

    showProfile: async (state, event) => {
        await axios({method: 'get', url: localHost + "users/profile", headers: {"Authorization" : "Bearer " + state.tokenLogin}})
            .then(function(response){
                store.setState({
                    profileUserData: {
                        email: response.data.user_data.email,
                        alamat: response.data.user_data.alamat,
                        fotoProfil: response.data.user_data.foto_profil,
                        namaLengkap: response.data.user_data.nama_lengkap,
                        nomorHp: response.data.user_data.nomor_hp,
                        username: response.data.user_data.username
                    },
                    notificationList: response.data.new_order,
                    bookList: response.data.books,
                    historyList: response.data.history_belanja
                })
            })
            .catch(function(response){
            })
    },

    handleSearch: (state, event) => {
        let penjual = state.namaUserPenjual
        let penerbit = state.penerbit
        let pengarang = state.pengarang
        let nomorIsbn = state.nomorIsbn
        let idBuku = state.idBuku
        let judulBuku = state.judulBuku

        let searchQuery = localHost + 'public/buku?'
        if (judulBuku !== ''){
            searchQuery = searchQuery + 'judul_buku=' + judulBuku + '&'
        }
        if (penjual !== ''){
            searchQuery = searchQuery + 'username_penjual=' + penjual + '&'
        }
        if (penerbit !== ''){
            searchQuery = searchQuery + 'penerbit=' + penerbit + '&'
        }
        if (pengarang !== ''){
            searchQuery = searchQuery + 'pengarang=' + pengarang + '&'
        }
        if (nomorIsbn !== ''){
            searchQuery = searchQuery + 'nomor_isbn=' + nomorIsbn + '&'
        }
        if (idBuku !== ''){
            searchQuery = searchQuery + 'id_buku=' + idBuku + '&'
        }

        axios
            .get(searchQuery)
            .then(function(response){
                store.setState({daftarBuku: response.data, isLoading: false, isSearch: true, isFilter: false})
            })
            .catch(function(response){
                store.setState({isLoading: false})
            })
    },

    resetSearch: (state, event) => {
        store.setState({isSearch: false, isFilter: false, judulBuku: '', namaUserPenjual: '', pengarang: '', penerbit: '', nomorIsbn: '', idBuku: '', category: 'Umum'})
    },

    handleFilter: (state, event) => {
        let searchQuery = localHost + 'public/buku?kategori=' + state.category
        axios
            .get(searchQuery)
            .then(function(response){
                store.setState({daftarBuku: response.data, isLoading: false, isSearch: true, isFilter: true, activeCategory: state.category})
            })
            .catch(function(response){
                store.setState({isLoading: false})
            })
    },

    clickBookDetailUser: async (state, bookId) => {
        const self = this
        await axios
            .get(localHost + "users/buku/" + bookId, {headers: {"Authorization" : "Bearer " + state.tokenLogin} })
            .then(function(response){
                store.setState({
                    dataDetilPenjual: {
                        username: response.data.data_penjual.username,
                        nomorHp: response.data.data_penjual.nomor_hp,
                        alamat: response.data.data_penjual.alamat,
                        namaLengkap: response.data.data_penjual.nama_lengkap,
                        fotoProfil: response.data.data_penjual.foto_profil
                    },
                    dataDetilBuku: {
                        judulBuku: response.data.data_buku.judul_buku,
                        idBuku: response.data.data_buku.id_buku,
                        kategori: response.data.data_buku.kategori,
                        penerbit: response.data.data_buku.penerbit,
                        pengarang: response.data.data_buku.pengarang,
                        nomorIsbn: response.data.data_buku.nomor_isbn,
                        hargaSatuan: response.data.data_buku.harga_satuan,
                        stok: response.data.data_buku.stok,
                        deskripsiBuku: response.data.data_buku.deskripsi_buku,
                        fotoBuku: response.data.data_buku.foto_buku   
                    },
                    canAdd: response.data.can_add,
                    placeholderStart: response.data.placeholder_start
                })
            })
            .catch(function(response){
                store.setState({isLoading: false})
            })
        },

    clickBookDetail: async (state, bookId) => {
        const self = this
        await axios
            .get(localHost + "public/buku/" + bookId)
            .then(function(response){
                store.setState({
                    dataDetilPenjual: {
                        username: response.data.data_penjual.username,
                        nomorHp: response.data.data_penjual.nomor_hp,
                        alamat: response.data.data_penjual.alamat,
                        namaLengkap: response.data.data_penjual.nama_lengkap,
                        fotoProfil: response.data.data_penjual.foto_profil
                    },
                    dataDetilBuku: {
                        judulBuku: response.data.data_buku.judul_buku,
                        idBuku: response.data.data_buku.id_buku,
                        kategori: response.data.data_buku.kategori,
                        penerbit: response.data.data_buku.penerbit,
                        pengarang: response.data.data_buku.pengarang,
                        nomorIsbn: response.data.data_buku.nomor_isbn,
                        hargaSatuan: response.data.data_buku.harga_satuan,
                        stok: response.data.data_buku.stok,
                        deskripsiBuku: response.data.data_buku.deskripsi_buku,
                        fotoBuku: response.data.data_buku.foto_buku   
                    }
                })
            })
            .catch(function(response){
                store.setState({isLoading: false})
            })
        }
    }
)