import React from 'react';
import './sidebar.css';

class Sidebar extends React.Component {

    render() {
        return (
            <section className="nav-bar-menu">
                <div className="menu-top-header">
                    <div className="store">
                        <div className="avatar">
                            <img src="https://eon51.com/wp-content/uploads/2018/05/logo-tng-51.png" />
                        </div>
                        <div className="store-info">
                            <h4>KAMEREO</h4>
                            <p>135 Hai Ba Trung</p>
                        </div>
                    </div>
                    <div className="changeInfo">
                        <a href="#" className="btn-changeInfo">CHANGE STORE</a>
                    </div>
                </div>
                <div className="favorite-item">
                    <i className="fas fa-heart"></i>
                    <h4>FAVORITE ITEMS</h4>
                </div>
                <ul className="sidebar-nav">
                    <h4>Dashboard</h4>
                    <ul>
                        <li>
                            <a href="#">
                                <i className="fas fa-history"></i>
                                <p>Overview</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fas fa-scroll"></i>
                                <p>Orders</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fas fa-luggage-cart"></i>
                                <p>Suppliers List</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fas fa-chart-bar"></i>
                                <p>Statistic</p>
                            </a>
                        </li>
                    </ul>
                    <h4>Market Place</h4>
                    <ul>
                        <li>
                            <a href="#">
                                <i className="fas fa-store"></i>
                                <p>Market</p>
                            </a>
                        </li>
                    </ul>
                    <h4>General Setting</h4>
                    <ul>
                        <li>
                            <a href="#">
                                <i className="fas fa-building"></i>
                                <p>Company Info</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fab fa-app-store-ios"></i>
                                <p>Store Info</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fas fa-users"></i>
                                <p>User Management</p>
                            </a>
                        </li>
                    </ul>
                </ul>
            </section>
        );
    }
}

export default Sidebar;
