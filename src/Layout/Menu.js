import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Menu extends Component {
    render() {
        return (
            <div>
                <aside className="main-sidebar">
                    {/* sidebar: style can be found in sidebar.less */}
                    <section className="sidebar">
                    {/* Sidebar Menu */}
                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="header">OPCIONES</li>
                        {/* Optionally, you can add icons to the links */}
                        <li><Link to='/reports'><i className="fa fa-link" /> <span>Usuarios</span></Link></li>
                        <li><a href="fake_url"><i className="fa fa-link" /> <span>Another Link</span></a></li>
                        <li className="treeview">
                        <a href="fake_url"><i className="fa fa-link" /> <span>Multilevel</span>
                            <span className="pull-right-container">
                            <i className="fa fa-angle-left pull-right" />
                            </span>
                        </a>
                        <ul className="treeview-menu">
                            <li><a href="fake_url">Link in level 2</a></li>
                            <li><a href="fake_url">Link in level 2</a></li>
                        </ul>
                        </li>
                    </ul>
                    {/* /.sidebar-menu */}
                    </section>
                    {/* /.sidebar */}
                </aside>
            </div>

        );
    }
}

export default Menu;
