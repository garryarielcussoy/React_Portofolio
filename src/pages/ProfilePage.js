import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";

import HeaderAndNavigation from '../components/HeaderAndNavigation'
import ProfileComponent from '../components/ProfileComponent'
import NotificationComponent from '../components/NotificationComponent'
import UserBookListComponent from '../components/UserBookListComponent'
import UserHistoryComponent from '../components/UserHistoryComponent'
import FooterComponent from '../components/FooterComponent';

const ProfilePage = () => {
    return (
        <React.Fragment>
            <HeaderAndNavigation />
            <ProfileComponent />
            <NotificationComponent />
            <UserBookListComponent />
            <UserHistoryComponent />
            <FooterComponent />
        </React.Fragment>
    )
}

export default connect("", actions)(withRouter(ProfilePage));