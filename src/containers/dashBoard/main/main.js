// @flow weak

import React, {
    Component
}                             from 'react';
import DashRoutes             from '../../../routes/DashRoutes';
import { Link } from 'react-router-dom';
import auth from '../../../services/auth';

class Main extends Component {
    constructor(props) {
        super(props);

        this.onLogout = this.onLogout.bind(this);
    }

    componentDidMount() {
        const {
            history,
            isAuthenticated,
        } = this.props;
        if (!isAuthenticated)
            history.push('/login');
    }

    componentWillReceiveProps(nextProps) {
        const { history } = this.props;
        if (!nextProps.isAuthenticated)
            history.push('/login');
    }

    onLogout(e) {
        e.preventDefault();
        this.props.actions.onLogout();
    }

    checkUrl = str => {
        const url = window.location.href;
        return url.endsWith(str);
    };

    render() {
        return (
            <div className="container-scroller">
                <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row" style={{ border: 0, borderRadius: 0 }}>
                    <div className="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
                        <Link className="navbar-brand brand-logo" to="/dashboard">
                            <img src="/images/logo.png" alt="logo" style={{ marginTop: 10 }} />
                        </Link>
                    </div>
                    <div className="navbar-menu-wrapper d-flex align-items-center">
                        <ul className="navbar-nav navbar-nav-right">
                            {/*<li className="nav-item dropdown">*/}
                                {/*<a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown"*/}
                                   {/*href="#" data-toggle="dropdown">*/}
                                    {/*<i className="mdi mdi-bell-ring"/>*/}
                                    {/*<span className="count">4</span>*/}
                                {/*</a>*/}
                                {/*<div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"*/}
                                     {/*aria-labelledby="notificationDropdown">*/}
                                    {/*<a className="dropdown-item">*/}
                                        {/*<p className="mb-0 font-weight-normal float-left">You have 4 new notifications*/}
                                        {/*</p>*/}
                                        {/*<span className="badge badge-pill badge-warning float-right">View all</span>*/}
                                    {/*</a>*/}
                                    {/*<div className="dropdown-divider"/>*/}
                                    {/*<a className="dropdown-item preview-item">*/}
                                        {/*<div className="preview-thumbnail">*/}
                                            {/*<div className="preview-icon bg-success">*/}
                                                {/*<i className="icon-info mx-0"/>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="preview-item-content">*/}
                                            {/*<h6 className="preview-subject font-weight-medium">Application Error</h6>*/}
                                            {/*<p className="font-weight-light small-text">*/}
                                                {/*Just now*/}
                                            {/*</p>*/}
                                        {/*</div>*/}
                                    {/*</a>*/}
                                    {/*<div className="dropdown-divider"/>*/}
                                    {/*<a className="dropdown-item preview-item">*/}
                                        {/*<div className="preview-thumbnail">*/}
                                            {/*<div className="preview-icon bg-warning">*/}
                                                {/*<i className="icon-speech mx-0"/>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="preview-item-content">*/}
                                            {/*<h6 className="preview-subject font-weight-medium">Settings</h6>*/}
                                            {/*<p className="font-weight-light small-text">*/}
                                                {/*Private message*/}
                                            {/*</p>*/}
                                        {/*</div>*/}
                                    {/*</a>*/}
                                    {/*<div className="dropdown-divider"/>*/}
                                    {/*<a className="dropdown-item preview-item">*/}
                                        {/*<div className="preview-thumbnail">*/}
                                            {/*<div className="preview-icon bg-info">*/}
                                                {/*<i className="icon-envelope mx-0"/>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<div className="preview-item-content">*/}
                                            {/*<h6 className="preview-subject font-weight-medium">New user*/}
                                                {/*registration</h6>*/}
                                            {/*<p className="font-weight-light small-text">*/}
                                                {/*2 days ago*/}
                                            {/*</p>*/}
                                        {/*</div>*/}
                                    {/*</a>*/}
                                {/*</div>*/}
                            {/*</li>*/}
                            {/*<li className="nav-item dropdown">*/}
                                {/*<a className="nav-link count-indicator dropdown-toggle" id="messageDropdown" href="#"*/}
                                   {/*data-toggle="dropdown" aria-expanded="false">*/}
                                    {/*<i className="mdi mdi-email-variant"/>*/}
                                    {/*<span className="count">7</span>*/}
                                {/*</a>*/}
                                {/*<div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"*/}
                                     {/*aria-labelledby="messageDropdown">*/}
                                    {/*<div className="dropdown-item">*/}
                                        {/*<p className="mb-0 font-weight-normal float-left">You have 7 unread mails*/}
                                        {/*</p>*/}
                                        {/*<span className="badge badge-info badge-pill float-right">View all</span>*/}
                                    {/*</div>*/}
                                    {/*<div className="dropdown-divider"/>*/}
                                    {/*<a className="dropdown-item preview-item">*/}
                                        {/*<div className="preview-thumbnail">*/}
                                            {/*<img src="/images/faces/face4.jpg" alt="" className="profile-pic"/>*/}
                                        {/*</div>*/}
                                        {/*<div className="preview-item-content flex-grow">*/}
                                            {/*<h6 className="preview-subject ellipsis font-weight-medium">David Grey*/}
                                                {/*<span*/}
                                                    {/*className="float-right font-weight-light small-text">1 Minutes ago</span>*/}
                                            {/*</h6>*/}
                                            {/*<p className="font-weight-light small-text">*/}
                                                {/*The meeting is cancelled*/}
                                            {/*</p>*/}
                                        {/*</div>*/}
                                    {/*</a>*/}
                                    {/*<div className="dropdown-divider"/>*/}
                                    {/*<a className="dropdown-item preview-item">*/}
                                        {/*<div className="preview-thumbnail">*/}
                                            {/*<img src="/images/faces/face2.jpg" alt="" className="profile-pic"/>*/}
                                        {/*</div>*/}
                                        {/*<div className="preview-item-content flex-grow">*/}
                                            {/*<h6 className="preview-subject ellipsis font-weight-medium">Tim Cook*/}
                                                {/*<span className="float-right font-weight-light small-text">15 Minutes ago</span>*/}
                                            {/*</h6>*/}
                                            {/*<p className="font-weight-light small-text">*/}
                                                {/*New product launch*/}
                                            {/*</p>*/}
                                        {/*</div>*/}
                                    {/*</a>*/}
                                    {/*<div className="dropdown-divider"/>*/}
                                    {/*<a className="dropdown-item preview-item">*/}
                                        {/*<div className="preview-thumbnail">*/}
                                            {/*<img src="/images/faces/face3.jpg" alt="" className="profile-pic"/>*/}
                                        {/*</div>*/}
                                        {/*<div className="preview-item-content flex-grow">*/}
                                            {/*<h6 className="preview-subject ellipsis font-weight-medium"> Johnson*/}
                                                {/*<span className="float-right font-weight-light small-text">18 Minutes ago</span>*/}
                                            {/*</h6>*/}
                                            {/*<p className="font-weight-light small-text">*/}
                                                {/*Upcoming board meeting*/}
                                            {/*</p>*/}
                                        {/*</div>*/}
                                    {/*</a>*/}
                                {/*</div>*/}
                            {/*</li>*/}
                            <li className="nav-item d-none d-lg-block dropdown">
                                <a className="nav-link count-indicator dropdown-toggle" id="accountDropdown" href="#"
                                    data-toggle="dropdown" aria-expanded="false">
                                    <img className="img-xs rounded-circle" src="/images/faces/face4.jpg" alt=""/>
                                </a>
                                <div
                                    className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                                    aria-labelledby="accountDropdown"
                                    style={{ marginTop: 8, borderRadius: 4 }}
                                >
                                    <a href="#" className="dropdown-item profile-dropdown-item">
                                        <img className="profile-dropdown-icon" src="/images/icons/profile.png" />
                                        <p className="mb-0 font-weight-normal float-left">Xem hồ sơ cá nhân</p>
                                    </a>
                                    <div className="dropdown-divider profile-dropdown-item"/>
                                    <a href="#" onClick={this.onLogout} className="dropdown-item">
                                        <img className="profile-dropdown-icon" src="/images/icons/log_out.png" alt=""/>
                                        <p className="mb-0 font-weight-normal float-left">Đăng xuất</p>
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
                                type="button" data-toggle="offcanvas">
                            <span className="icon-menu"/>
                        </button>
                    </div>
                </nav>
                <div className="container-fluid page-body-wrapper">
                    <nav className="sidebar sidebar-offcanvas" id="sidebar">
                        <ul className="nav">
                            <li className="nav-item nav-profile">
                                <div className="nav-link">
                                    <div className="profile-image">
                                        <img src="/images/faces/face4.jpg" alt=""/>
                                        <span className="online-status online"/>
                                    </div>
                                    <div className="profile-name">
                                        <p className="name">Admin</p>
                                        <p className="designation">Quản trị viên</p>
                                        <div className="badge badge-teal mx-auto mt-3">Online</div>
                                    </div>
                                </div>
                            </li>
                            <li className={`nav-item ${this.checkUrl('/dashboard') ? 'm-active' : 'm-unactive'}`}>
                                <Link className="nav-link" to="/dashboard">
                                    <img className="menu-icon" src="/images/menu_icons/01.png" alt="menu icon"/>
                                    <span className="menu-title">Dashboard</span>
                                </Link>
                            </li>
                            <li className={`nav-item ${this.checkUrl('/dashboard/admins') ? 'm-active' : 'm-unactive'}`}>
                                <Link className="nav-link" to="/dashboard/admins">
                                    <img className="menu-icon" src="/images/menu_icons/08.png" alt="menu icon"/>
                                    <span className="menu-title">Admin</span>
                                </Link>
                            </li>
                            <li className={`nav-item ${this.checkUrl('/dashboard/jobs') ? 'm-active' : 'm-unactive'}`}>
                                <Link className="nav-link" to="/dashboard/jobs">
                                    <img className="menu-icon" src="/images/menu_icons/04.png" alt="menu icon"/>
                                    <span className="menu-title">Công việc</span>
                                </Link>
                            </li>
                            <li className={`nav-item ${this.checkUrl('/dashboard/packages') ? 'm-active' : 'm-unactive'}`}>
                                <Link className="nav-link" to="/dashboard/packages">
                                    <img className="menu-icon" src="/images/menu_icons/05.png" alt="menu icon"/>
                                    <span className="menu-title">Gói công việc</span>
                                </Link>
                            </li>
                            <li className={`nav-item ${this.checkUrl('/dashboard/categories') ? 'm-active' : 'm-unactive'}`}>
                                <Link className="nav-link" to="/dashboard/categories">
                                    <img className="menu-icon" src="/images/menu_icons/06.png" alt="menu icon"/>
                                    <span className="menu-title">Lĩnh vực</span>
                                </Link>
                            </li>
                            <li className={`nav-item ${this.checkUrl('/dashboard/skills') ? 'm-active' : 'm-unactive'}`}>
                                <Link className="nav-link" to="/dashboard/skills">
                                    <img className="menu-icon" src="/images/menu_icons/03.png" alt="menu icon"/>
                                    <span className="menu-title">Kỹ năng</span>
                                </Link>
                            </li>
                            <li className={`nav-item ${this.checkUrl('/dashboard/users') ? 'm-active' : 'm-unactive'}`}>
                                <Link className="nav-link" to="/dashboard/users">
                                    <img className="menu-icon" src="/images/menu_icons/07.png" alt="menu icon"/>
                                    <span className="menu-title">Người dùng</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="main-panel">
                        <DashRoutes />
                        <footer className="footer">
                            <div className="container-fluid clearfix">
                                <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">
                                    @2018 - Powered by LancerVN. All Right Reserved.
                                </span>
                                <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Hand-crafted & made with
                                    <i className="mdi mdi-heart text-danger"/>
                                </span>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
