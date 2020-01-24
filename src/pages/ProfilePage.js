import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'

import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";

import HeaderAndNavigation from '../components/HeaderAndNavigation'
import ProfileComponent from '../components/ProfileComponent'
import NotificationComponent from '../components/NotificationComponent'
import UserBookListComponent from '../components/UserBookListComponent'
import UserHistoryComponent from '../components/UserHistoryComponent'
import FooterComponent from '../components/FooterComponent';

const ProfilePage = (props) => {
    // For user who got logged out
    if (props.isLogin === false){
        props.history.push('/login')
    }
    
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

export default connect("isLogin", actions)(withRouter(ProfilePage));