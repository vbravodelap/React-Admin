import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Header extends Component {
    render() {
        return (
        <div>
            <header className="main-header">
                {/* Logo */}
                <Link to='/' className="logo">
                {/* mini logo for sidebar mini 50x50 pixels */}
                <span className="logo-mini"><b>A</b>LT</span>
                {/* logo for regular state and mobile devices */}
                <span className="logo-lg"><b>Admin</b>LTE</span>
                </Link>
                {/* Header Navbar */}
                <nav className="navbar navbar-static-top" role="navigation">
                {/* Sidebar toggle button*/}
                <a href="fake_url" className="sidebar-toggle" data-toggle="push-menu" role="button">
                    <span className="sr-only">Toggle navigation</span>
                </a>
                {/* Navbar Right Menu */}
                <div className="navbar-custom-menu">
                    <ul className="nav navbar-nav">
                    {/* User Account Menu */}
                    <li className="dropdown user user-menu">
                        {/* Menu Toggle Button */}
                        <a href="fake_url" className="dropdown-toggle" data-toggle="dropdown">
                        {/* The user image in the navbar*/}
                        <img src="dist/img/user2-160x160.jpg" className="user-image" alt="User" />
                        {/* hidden-xs hides the username on small devices so only the image appears. */}
                        <span className="hidden-xs">Alexander Pierce</span>
                        </a>
                        <ul className="dropdown-menu">
                        {/* The user image in the menu */}
                        <li className="user-header">
                            <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User" />
                            <p>
                            Alexander Pierce - Web Developer
                            <small>Member since Nov. 2012</small>
                            </p>
                        </li>
                        {/* Menu Body */}
                        <li className="user-body">
                            <div className="row">
                            <div className="col-xs-4 text-center">
                                <a href="fake_url">Followers</a>
                            </div>
                            <div className="col-xs-4 text-center">
                                <a href="fake_url">Sales</a>
                            </div>
                            <div className="col-xs-4 text-center">
                                <a href="fake_url">Friends</a>
                            </div>
                            </div>
                            {/* /.row */}
                        </li>
                        {/* Menu Footer*/}
                        <li className="user-footer">
                            <div className="pull-left">
                            <a href="fake_url" className="btn btn-default btn-flat">Profile</a>
                            </div>
                            <div className="pull-right">
                            <a href="fake_url" className="btn btn-default btn-flat">Sign out</a>
                            </div>
                        </li>
                        </ul>
                    </li>
                    </ul>
                </div>
                </nav>
            </header>
        </div>

        );
    }
}

export default Header;
