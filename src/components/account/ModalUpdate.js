import React from 'react';
import './account.css';

import * as Types from '../../constant/ActionTypes';

class Account extends React.Component {
    constructor(props) {
        super(props);
        this.formRef = React.createRef();
        this.fileUpload = React.createRef();
        this.state = {
            nameStore: {
                value: '',
                error: ''
            },
            addressStore: {
                value: '',
                error: ''
            },
            districtStore: {
                value: '',
                error: ''
            },
            cityStore: {
                value: '',
                error: ''
            },
            phoneStore: {
                value: '',
                error: ''
            },
            nameRedInvoice: {
                value: '',
                error: ''
            },
            addressRedInvoice: {
                value: '',
                error: ''
            },
            districtRedInvoice: {
                value: '',
                error: ''
            },
            cityRedInvoice: {
                value: '',
                error: ''
            },
            taxRedInvoice: {
                value: '',
                error: ''
            }, 
        }
    }
    closeModal = () => {
        const { closeModalUpdate } = this.props;

        closeModalUpdate(false);
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target

        const dataState = [];

        dataState[name] = {
            value: value,
            error: ''
        }

        const validEmailRegex = RegExp(['^[0-9]+$']);

        if (name === "phoneStore") {
            const checkRegex = validEmailRegex.test(value);

            if (checkRegex === false && value) {
                dataState[name].error = 'Phone is number type'
            } else {
                dataState[name].error = ''
            }
        }

        this.setState(dataState);
    }

    handleSubmit = (event) => {
        event.preventDefault();

        console.log('submit');
    }

    handleSelectImage() {
        this.fileUpload.current.click();
        
       console.log(this.fileUpload.current)
    }

    upLoadImage = () => {
        console.log(this.fileUpload.current.files)
    }

    render() {
        const {
            isOpenModal
        } = this.props

        const {
            nameStore,
            addressStore,
            districtStore,
            cityStore,
            phoneStore,
            nameRedInvoice,
            addressRedInvoice,
            districtRedInvoice,
            cityRedInvoice,
            taxRedInvoice,
        } = this.state;

        const selectDistrict = Types.DISTRICT.map((item, index) => {
            return (<option key={index.toString()} value={item}>{item}</option>)
        })

        const selectCity = Types.CITY.map((item, index) => {
            return (<option key={index.toString()} value={item}>{item}</option>)
        })

        return (
            <div
                className={`modal modal-update-user ${isOpenModal === true ? 'show-modal' : ''}`}
                id="modal-user" tabindex="-1"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <i class="fas fa-edit"></i>
                            <h5 className="modal-title">EDIT STORE PROFILE</h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                                onClick={this.closeModal}
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body row">
                            <div className="col-sm-12 col-lg-4" >
                                <h4>STORE IMAGE</h4>
                                <div
                                    className="avatar"
                                    onClick={() => this.handleSelectImage()}
                                >
                                    <img
                                        src="https://eon51.com/wp-content/uploads/2018/05/logo-tng-51.png"
                                    />
                                </div>
                                <input
                                    type="file"
                                    id="upload"
                                    accept="image/png, image/jpeg, image/jpg"
                                    ref={this.fileUpload}
                                />
                                <div className="btn-group">
                                    <button type="button" className="btn btn-secondary btn-remove">Remove</button>
                                    <button
                                        type="button"
                                        className="btn btn-secondary btn-upload"
                                        onClick={this.upLoadImage}
                                    >
                                        Upload Image
                                    </button>
                                </div>
                            </div>
                            <div className="col-sm-12 col-lg-8" >
                                <form
                                    className="form-update"
                                    ref={this.formRef}
                                >
                                    <h4>BASIC INFO</h4>
                                    <div className="form-group">
                                        <label>Store Name</label>
                                        <input
                                            type="text"
                                            name="nameStore"
                                            value={nameStore.value}
                                            className="form-control"
                                            placeholder="Store Name"
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Store Address</label>
                                        <div className="row">
                                            <div className="col-sm-12 col-lg-6">
                                                <input
                                                    type="text"
                                                    name="addressStore"
                                                    value={addressStore.value}
                                                    className="form-control"
                                                    placeholder="Address"
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                            <div className="col-sm-12 col-lg-3">
                                                <select
                                                    className="form-control"
                                                    name="districtStore"
                                                    value={districtStore.value}
                                                    onChange={this.handleChange}
                                                >
                                                <option>District</option>
                                                {selectDistrict}
                                                </select>
                                            </div>
                                            <div className="col-sm-12 col-lg-3">
                                                <select
                                                    className="form-control"
                                                    name="cityStore"
                                                    value={cityStore.value}
                                                    onChange={this.handleChange}
                                                >
                                                    <option>City</option>
                                                    {selectCity}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Phone #</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Phone"
                                            name="phoneStore"
                                            autocomplete="off"
                                            value={phoneStore.value}
                                            onChange={this.handleChange}
                                            />
                                        <p
                                            className="error"
                                            style={{
                                                display: phoneStore.error && phoneStore.error.length > 0 ? 'block' : 'none'
                                            }}
                                        >
                                            {phoneStore.error}
                                        </p>
                                    </div>
                                    <h4>RED INVOICE INFO</h4>
                                    <div className="form-group">
                                        <label>Company Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Company Name"
                                            name="nameRedInvoice"
                                            value={nameRedInvoice.value}
                                            onChange={this.handleChange}
                                            />
                                    </div>
                                    <div className="form-group">
                                        <label>Company Address</label>
                                        <div className="row">
                                            <div className="col-sm-12 col-lg-6">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Address"
                                                    name="addressRedInvoice"
                                                    value={addressRedInvoice.value}
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                            <div className="col-sm-12 col-lg-3">
                                                <select
                                                    className="form-control"
                                                    name="districtRedInvoice"
                                                    value={districtRedInvoice.value}
                                                    onChange={this.handleChange}
                                                >
                                                <option>District</option>
                                                {selectDistrict}
                                                </select>
                                            </div>
                                                <div className="col-sm-12 col-lg-3">
                                                    <select
                                                        className="form-control"
                                                        name="cityRedInvoice"
                                                        value={cityRedInvoice.value}
                                                        onChange={this.handleChange}
                                                        >
                                                        <option>City</option>
                                                        {selectCity}
                                                    </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>MST</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="MST"
                                            name="taxRedInvoice"
                                            value={taxRedInvoice.value}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="form-group button-submit">
                                        <button
                                            className={`btn btn-secondary btn-save 
                                            ${phoneStore.error && phoneStore.error.length > 0 ? 'disabled' : ''}`}
                                            onClick={
                                                phoneStore.error && phoneStore.error.length > 0 ? () => {}
                                                : (event) => this.handleSubmit(event)}
                                        >
                                            Save
                                        </button>
                                        <button
                                            className="btn btn-secondary btn-cancel"
                                            >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Account;