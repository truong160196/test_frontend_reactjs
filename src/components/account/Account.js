import React from 'react';
import './account.css';

//import component
import ModalUpdateAccount from './ModalUpdate';

class Account extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpenModal: false
        }
    }
    
    componentWillMount = async() => {
        //
    }

    openModalUpdate = () => {
        this.setState({
            isOpenModal: true,
        })
    }

    closeModalUpdate = (isConfirm) => {
        if (isConfirm === true) {
            //
        }

        this.setState({
            isOpenModal: false,
        })
    }

    render() {
        const {
            isOpenModal,
        } = this.state;

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
                                    <img src="https://eon51.com/wp-content/uploads/2018/05/logo-tng-51.png" />
                                </div>
                                <h4>STORE INFO.</h4>
                                <table>
                                    <tbody>
                                        <col width="40%" />
                                        <col width="60%" />
                                        <tr>
                                            <td className="label">Name:</td>
                                            <td className="content">K.O.I The.</td>
                                        </tr>
                                        <tr>
                                            <td className="label">Address:</td>
                                            <td className="content">521 Hồ Tùng Mậu, D1, HCM</td>
                                        </tr>
                                        <tr>
                                            <td className="label">Phone #:</td>
                                            <td className="content">(338) 886-9944</td>
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
                                            <td className="content">K.O.I The International Company</td>
                                        </tr>
                                        <tr>
                                            <td className="label">Address:</td>
                                            <td className="content">9682 Wakehurst Avenue Arlington Heights, IL, 60004</td>
                                        </tr>
                                        <tr>
                                            <td className="label">MST:</td>
                                            <td className="content">P77744944</td>
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
                    />
                </div>
            </section>
        );
    }
}

export default Account;
