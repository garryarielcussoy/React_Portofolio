import createStore from 'unistore'
import axios from 'axios'
import Swal from 'sweetalert2'
import { stat } from 'fs';
import { func } from 'prop-types';

const inisialization = {
    // Search and filter
    isSearch: false,
    isFilter: false,
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

    // Book Detail Page
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
    addToCartStatus: false,

    // Register page
    emailRegister: '',
    usernameRegister: '',
    passwordRegister: '',
    confirmPasswordRegister: '',
    namaLengkapRegister: '',
    alamatRegister: '',
    nomorHpRegister: '',
    fotoProfilRegister: '',
    isValid: false,

    // Login page
    isLogin: false,
    usernameLogin: '',
    passwordLogin: '',
    tokenLogin: '',
    
    // Cart related
    canAdd: '',
    placeholderStart: 0,
    cartList: [],
    jumlahPembelian: '',
    totalHarga: '',
    usernamePenjualCart: '',
    alamatCart: '',
    nomorHpCart: '',
    successSend: false,

    // ----- Profile page -----
    // Profile part
    profileUserData: {
        alamat: '',
        email: '',
        fotoProfil: '',
        namaLengkap: '',
        nomorHp: '',
        username: ''
    },
    // Books list in profile
    showBookList: false,
    bookList: [],
    // Notifications list in profile
    showNotifications: false,
    notificationList: [],
    // Shopping histories list
    showHistory: false,
    historyList: [],
    
    // Adding a book
    judulBukuAdd: '',
    pengarangAdd: '',
    penerbitAdd: '',
    nomorIsbnAdd: '',
    fotoBukuAdd: '',
    stokAdd: '',
    hargaSatuanAdd: '',
    categoryAdd: 'Umum',
    deskripsiBukuAdd: '',
    successAddBook: true,

    // Edit a book
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
    successEditBook: true,

    // Admin related
    adminUserList: [],
    adminTransaksiList: [],
    
    // Localhost for backend
    localHost: 'https://serbabuku.club/'
}

// const localHost = 'http://serbabuku.club/'
// const localHost = 'http://13.229.61.125:5000/'
// const localHost = 'http://0.0.0.0:5000/'
const localHost = inisialization.localHost

// Creating store
export const store = createStore(inisialization)

export const actions = store => (
{
    // Function to handle input change, used in many inputs in forms
    handleChange: (state, event) => {
        store.setState({[event.target.name]: event.target.value})
    },

    // Function to handle submit form event
    handleSubmit: (state, event) => {
        event.preventDefault()
    },

    // Increase the number in placeholder in the detail book page
    increaseItem: (state, event) => {
        const placeholderStartNow = state.placeholderStart + 1
        store.setState({placeholderStart: placeholderStartNow})
    },

    // Decrease the number in placeholder in the detail book page
    decreaseItem: (state, event) => {
        // To verify that the placeholder minimum value is 0
        if (state.placeholderStart >= 1){
            const placeholderStartNow = state.placeholderStart - 1
            store.setState({placeholderStart: placeholderStartNow})   
        }
    },

    // Add books to active cart
    addToCart: async (state, event) => {
        // Define the response message
        const messageTypeOne = 'Sukses menambahkan buku ke keranjang'
        const messageTypeTwo = 'Sukses menghapus buku dari keranjang'

        await axios({method: 'patch', url: localHost + "users/buku/" + state.dataDetilBuku.idBuku, headers: {"Authorization" : "Bearer " + state.tokenLogin}, data: {jumlah_pembelian: state.placeholderStart} })
            .then(response => {
                store.setState({placeholderStart: 0})
                
                // Success case
                if (response.data.message === messageTypeOne || response.data.message === messageTypeTwo)
                {
                    store.setState({addToCartStatus: true})
                    Swal.fire(response.data.message, '', 'success')
                }
                // Fail case
                else {
                    store.setState({addToCartStatus: false})
                    Swal.fire(response.data.message, '', 'warning')
                }
            })
            .catch(response => {
                store.setState({addToCartStatus: false})
                Swal.fire(response.message, '', 'warning')
            })
    },

    // Showing all books in active cart
    showCart: async (state, event) => {
        await axios
            .get(localHost + "users/keranjang", {headers: {"Authorization" : "Bearer " + state.tokenLogin}})
            .then(response => {
                store.setState({
                    cartList: response.data.data_transaksi, 
                    jumlahPembelian: response.data.jumlah_pembelian, 
                    totalHarga: response.data.total_harga, 
                    usernamePenjualCart: response.data.data_penjual.username, 
                    alamatCart: response.data.data_penjual.alamat, 
                    nomorHpCart: response.data.data_penjual.nomor_hp
                })
            })
            .catch(response => {
            })
    },

    // Send an order in active cart
    sentCart: async (state, event) => {
        await axios({method: 'put', url: localHost + "users/keranjang", headers: {"Authorization" : "Bearer " + state.tokenLogin}})
            .then(response => {
                store.setState({cartList: []})
                if(response.data.message === 'Pesananmu sudah dikirim. Silahkan melakukan komunikasi dengan penjual. Terimakasih')
                {
                    store.setState({successSend: true})
                    Swal.fire(response.data.message, '', 'success')
                }
                else{
                    store.setState({successSend: false})
                    Swal.fire(response.data.message, '', 'warning')
                }
            })
            .catch(response => {
                store.setState({successSend: false})
                Swal.fire(response.data.message, '', 'warning')
            })
    },

    // Handling accept order event
    acceptOrder: async (state, notificationId) => {
        await axios({method: 'post', url: localHost + "users/profile", headers: {"Authorization" : "Bearer " + state.tokenLogin}, data: {transaction_id: notificationId, status: 'terima'}})
            .then(response => {
                Swal.fire("Sukses menerima pesanan!", "", "success")
            })
            .catch(response => {
            })
    },

    // Handling reject order event
    rejectOrder: async (state, notificationId) => {
        await axios({method: 'post', url: localHost + "users/profile", headers: {"Authorization" : "Bearer " + state.tokenLogin}, data: {transaction_id: notificationId, status: 'tolak'}})
            .then(response => {
                Swal.fire("Sukses menolak pesanan!", "", "success")
            })
            .catch(response => {
            })
    },

    // Send register data to flask
    handleRegister: async (state, event) => {
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
            .then(response => {
                if (response.data.message === 'Selamat! Akunmu sudah terdaftar sekarang'){
                    Swal.fire(response.data.message, '', 'success')
                    store.setState({
                        isValid: true, 
                        emailRegister: '', 
                        passwordRegister: '', 
                        confirmPasswordRegister: '', 
                        namaLengkapRegister: '', 
                        fotoProfilRegister: '', 
                        alamatRegister: '', 
                        nomorHpRegister: ''
                    })
                }
                else {
                    store.setState({isValid: false})
                    Swal.fire(response.data.message, '', 'warning')
                }
            })
            .catch(response => {
                store.setState({isValid: false})
                Swal.fire(response.data.message, '', 'warning')
            })
    },

    // Handle login event
    handleLogin: async (state, event) => {
        const data = {
            username: state.usernameLogin,
            password: state.passwordLogin
        }
        
        await axios
            .post(localHost + 'login', data)
            .then(response => {
                store.setState({isLogin: true, tokenLogin: response.data.token, isLoading: true})
                Swal.fire('Login berhasil!', 'Selamat datang ' + data.username, 'success')
            })
            .catch(response => {
                store.setState({tokenLogin: '', isLogin: false})
                Swal.fire('Username atau password yang kamu masukkan salah', '', 'warning')
            })
    },

    // Show all users list in admin page
    handleAdmin: async (state, event) => {
        await axios({method: 'get', url: localHost + "admin/users", headers: {"Authorization" : "Bearer " + state.tokenLogin}})
            .then(response => {
                store.setState({adminUserList: response.data})
            })
            .catch(response => {
            })
    },

    // Show all transactions in admin page
    showAdminTransaksi: async (state, event) => {
        await axios({method: 'get', url: localHost + "admin/transaksi", headers: {"Authorization" : "Bearer " + state.tokenLogin}})
            .then(response => {
                store.setState({adminTransaksiList: response.data})
            })
            .catch(response => {
            })
    },

    // Handling event when admin delete an user
    deleteUser: async (state, userId) => {
        await axios({method: 'delete', url: localHost + "admin/users", headers: {"Authorization" : "Bearer " + state.tokenLogin}, data: {user_id: userId}})
            .then(response => {
                Swal.fire("Kamu telah menghapus user terkait")
            })
            .catch(response => {
            })
    },

    // Handling logout event
    handleLogout: async (state, event) => {
        store.setState(inisialization)
    },

    // Add a book in profile page
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
            .then(response => {
                store.setState({successAddBook: true})
                Swal.fire("Kamu sukses menambahkan buku", "", "success")
            })
            .catch(response => {
                store.setState({successAddBook: false})
                
                // Case when there is at least one field left empty
                if(state.judulBukuAdd === '' || state.pengarangAdd === '' || state.penerbitAdd === '' || state.deskripsiBukuAdd === '' || state.categoryAdd === '' || state.stokAdd === '' || state.hargaSatuanAdd === ''){
                    Swal.fire("Tidak boleh ada field yang dikosongkan (kecuali foto buku)", "", "warning")
                }

                // Case when the book has already added
                else{
                    Swal.fire("Buku yang kamu ingin tambahkan sudah ada di daftar buku yang kamu jual saat ini", "", "success")
                }
            })
    },

    // Delete a book
    deleteBook: async (state, bookId) => {
        await axios({method: 'delete', url: localHost + "users/profile/edit-buku/" + bookId, headers: {"Authorization" : "Bearer " + state.tokenLogin}})
            .then(response => {
                Swal.fire("Kamu sukses menghapus buku", "", "success")
            })
            .catch(response => {
            })
    },

    // Prepare the form for book editting (fill the placeholder with the book informations)
    prepareEditBook: async (state, bookId) => {
        await axios({method: 'get', url: localHost + "users/profile/edit-buku/" + bookId, headers: {"Authorization" : "Bearer " + state.tokenLogin}})
        .then(response => {
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
        .catch(response => {
        })
    },

    // Send the editted data to flask
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
        .then(response => {
            store.setState({successEditBook: true})
            Swal.fire("Kamu sukses mengedit buku", "", "success")
        })
        .catch(response => {
            store.setState({successEditBook: false})
            Swal.fire("Tidak boleh ada field yang dikosongkan (kecuali foto buku)", "", "warning")
        })
    },

    // Show profile user data
    showProfile: async (state, event) => {
        await axios({method: 'get', url: localHost + "users/profile", headers: {"Authorization" : "Bearer " + state.tokenLogin}})
            .then(response => {
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
            .catch(response => {
            })
    },

    // Handling seaeching event
    handleSearch: (state, event) => {
        let penjual = state.namaUserPenjual
        let penerbit = state.penerbit
        let pengarang = state.pengarang
        let nomorIsbn = state.nomorIsbn
        let idBuku = state.idBuku
        let judulBuku = state.judulBuku

        // Filter part
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
            .then(response => {
                store.setState({daftarBuku: response.data, isLoading: false, isSearch: true, isFilter: false})
            })
            .catch(response => {
                store.setState({isLoading: false})
            })
    },

    // To make the serach and filter related state back to default
    resetSearch: (state, event) => {
        store.setState({isSearch: false, isFilter: false, judulBuku: '', namaUserPenjual: '', pengarang: '', penerbit: '', nomorIsbn: '', idBuku: '', category: 'Umum'})
    },

    // Handle filter event
    handleFilter: (state, event) => {
        let searchQuery = localHost + 'public/buku?kategori=' + state.category
        axios
            .get(searchQuery)
            .then(response => {
                store.setState({daftarBuku: response.data, isLoading: false, isSearch: true, isFilter: true, activeCategory: state.category})
            })
            .catch(response => {
                store.setState({isLoading: false})
            })
    },

    // Preparing for detail book page for user
    clickBookDetailUser: async (state, bookId) => {
        await axios
            .get(localHost + "users/buku/" + bookId, {headers: {"Authorization" : "Bearer " + state.tokenLogin} })
            .then(response => {
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
            .catch(response => {
                store.setState({isLoading: false})
            })
        },

    // Preparing for detail book page for public
    clickBookDetail: async (state, bookId) => {
        await axios
            .get(localHost + "public/buku/" + bookId)
            .then(response => {
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
            .catch(response => {
                store.setState({isLoading: false})
            })
        }
    }
)