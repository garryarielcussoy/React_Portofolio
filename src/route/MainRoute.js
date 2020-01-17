import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'

import HomePage from '../pages/HomePage'
import BookListPage from '../pages/BookListPage'
import BookDetailPage from '../pages/BookDetailPage'
import LoginPage from '../pages/LoginPage'
import AboutPage from '../pages/AboutPage'
import RegisterPage from '../pages/RegisterPage'
import UserHomePage from '../pages/UserHomePage'
import UserBookListPage from '../pages/UserBookListPage'
import UserBookDetailPage from '../pages/UserBookDetailPage'
import CartPage from '../pages/CartPage'
import ProfilePage from '../pages/ProfilePage'
import AddBookPage from '../pages/AddBookPage'
import EditBookPage from '../pages/EditBookPage'
import AdminListUserPage from '../pages/AdminListUserPage'
import AdminListTransaksiPage from '../pages/AdminListTransaksiPage'
import NotFoundPage from '../pages/NotFoundPage'

class MainRoute extends React.Component {
    render(){
        return (
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/users" component={UserHomePage} />
                <Route exact path="/public/buku" component={BookListPage} />
                <Route exact path="/users/buku" component={UserBookListPage} />
                <Route exact path="/public/buku/:idbuku" component={BookDetailPage} />
                <Route exact path="/users/buku/:idbuku" component={UserBookDetailPage} />
                <Route exact path="/users/keranjang" component={CartPage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/daftar" component={RegisterPage} />
                <Route exact path="/users/profile" component={ProfilePage} />
                <Route exact path="/users/profile/tambah" component={AddBookPage} />
                <Route exact path="/users/profile/edit-buku" component={EditBookPage} />
                <Route exact path="/admin/users" component={AdminListUserPage} />
                <Route exact path="/admin/transaksi" component={AdminListTransaksiPage} />
                <Route component={NotFoundPage} />
            </Switch>
        )
    }
}
export default MainRoute