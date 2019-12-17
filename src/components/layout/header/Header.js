import React from 'react';
import './header.css';

class Header extends React.Component {
    render() {
        return (
            <section className="header">
                <div className="company-name">
                    <h3>KAMEREO</h3>
                </div>
                <div className="right-header">
                    <ul>
                        <li>
                            <a href="#" className="">
                                <i className="far fa-envelope"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="">
                                <i className="fas fa-shopping-cart">
                                    <span className="icon-bar">4</span>
                                </i>
                            </a>
                        </li>
                        <li>
                            <button
                                className="btn btn-light dropdown-toggle select-lang"
                                type="button" id="lang"
                                aria-haspopup="true"
                                aria-expanded="false">
                                ENG
                            </button>
                        </li>
                        <li>
                            <div className="account">
                                <div className="avatar">
                                    <img src="https://yoast.com/app/uploads/2019/04/Meike_bubble-250x285.png" />
                                </div>
                                <div className="info-user">
                                    <h5>Taku Tanaka</h5>
                                    <p>Administrator</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
        </section>
        );
    }
}

export default Header;
