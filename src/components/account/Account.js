import React from 'react';
import { connect } from 'react-redux';

import './account.css';

import {
    actGetUser,
    actUploadImage,
    actPostUpdate,
} from '../../actions/account/index';

//import component
import ModalUpdateAccount from './ModalUpdate';

class Account extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpenModal: false
        }
    }
    componentDidMount = () => {
       const { getUser } = this.props;

       getUser();
    }
    openModalUpdate = () => {
        this.setState({
            isOpenModal: true,
        })
    }

    closeModalUpdate = (isConfirm) => {
        this.setState({
            isOpenModal: false,
        })
    }

    render() {
        const {
            account,
            uploadImage,
            postUpdate,
        } = this.props;
        const {
            isOpenModal,
        } = this.state;

        const {user} = account;
        console.log(user);
        return (
            <section className="body-main">
                <div className="page-header">
                    <h4>Store Information</h4>
                </div>
                <div className="page-body row">
                    <div className="col-sm-12 col-lg-5">
                        <div className="card card-info">
                            <div className="card-body">
                                <div className="avatar">
                                    <img
                                        src={user && user.logoUrl ? user.logoUrl : ''
                                        }
                                        alt="logo"
                                    />
                                </div>
                                <h4>STORE INFO.</h4>
                                <table>
                                    <tbody>
                                        <col width="40%" />
                                        <col width="60%" />
                                        <tr>
                                            <td className="label">Name:</td>
                                            <td className="content">{user && user.name ? user.name : ''}</td>
                                        </tr>
                                        <tr>
                                            <td className="label">Address:</td>
                                            <td className="content">{user && user.address ? user.address : ''}</td>
                                        </tr>
                                        <tr>
                                            <td className="label">Phone #:</td>
                                            <td className="content">{user && user.phone ? user.phone : ''}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h4>RED INVOICE INFO.</h4>
                                <table>
                                    <tbody>
                                        <col width="40%" />
                                        <col width="60%" />
                                        <tr>
                                            <td className="label">Company Name:</td>
                                            <td className="content">
                                                {user && user.phone && user.redInvoices.name ? user.redInvoices.name : ''}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="label">Address:</td>
                                            <td className="content">
                                                {user && user.phone && user.redInvoices.address ? user.redInvoices.address : ''}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="label">MST:</td>
                                            <td className="content">
                                                {user && user.phone && user.redInvoices.taxCode ? user.redInvoices.taxCode : ''}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button
                                    type="button"
                                    className="btn btn-secondary btn-edit-user"
                                    onClick={this.openModalUpdate}
                                >Edit Profile</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-7">
                        <div className="card card-info">
                            <div className="card-body">
                                <h5>DELIVERY DEFAULT MESSAGE</h5>
                                <form className="form-update-user">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <textarea className="form-control" rows="2" placeholder="Write your message"></textarea>
                                    </div>
                                    <div className="form-check disabled">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <textarea className="form-control" rows="2" placeholder="Write your message"></textarea>
                                    </div>
                                    <div className="form-check disabled">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <textarea className="form-control" rows="2" placeholder="Write your message"></textarea>
                                    </div>
                                    <div className="form-check disabled">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <textarea className="form-control" rows="2" placeholder="Write your message"></textarea>
                                    </div>
                                    <div className="form-check disabled">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <textarea className="form-control" rows="2" placeholder="Write your message"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <button type="button" className="btn btn-secondary btn-update">Update</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <ModalUpdateAccount
                        isOpenModal={isOpenModal}
                        closeModalUpdate={this.closeModalUpdate}
                        account={account}
                        uploadImage={uploadImage}
                        postUpdate={postUpdate}
                    />
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    getUser: () => {
        dispatch(actGetUser());
    },
    uploadImage: request => {
        dispatch(actUploadImage(request));
    },
    postUpdate: request => {
        dispatch(actPostUpdate(request));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
