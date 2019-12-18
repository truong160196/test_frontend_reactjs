/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import Renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Account from '../../../src/components/account/Account';

jest.mock('react-redux', () => ({
  connect: (mapState, mapDispatch) => ReactComponent => ReactComponent,
}));
console.warn = () => {};

describe('⚫ ExecutionHistory correctly', () => {
  const account = {
    user: {
      id: 1,
      name: "K.O.I The.",
      address: "521 Hồ Tùng Mậu, D1, HCM",
      district: "Ward 1",
      city: "HCM",
      phone: "3388869944",
      logoUrl: "",
      red_invoice_id: 1,
      redInvoices: {
        id: 1,
        name: "K.O.I The International Company",
        address: "9682 Wakehurst Avenue Arlington Heights, IL, 60004",
        district: "Heights",
        city: "IL",
        taxCode: "P77744944",
      }
    },
    model: {
      idStore: 0,
      idRedInvoice: 0,
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
      imageAvatar: '',
    }
  }

  const getUserMock = jest.fn();
  const uploadImageMock = jest.fn();
  const postUpdateMock = jest.fn();

  const accountComponent = () => (
    <Account
      account={account}
      getUser={getUserMock}
      uploadImage={uploadImageMock}
      postUpdate={postUpdateMock}
    />
  );

  let accountComponents = Renderer.create(
    accountComponent()
    ,
  );

  it('render accountComponent update begin', () => {
    expect(accountComponents.toJSON()).toMatchSnapshot();
  });

  it('handle openModalUpdate when user click open modal', () => {
    const wrapper = shallow(accountComponent());

    wrapper.instance().setState({
      isOpenModal: false,
    });

    wrapper.instance().openModalUpdate();

    expect(wrapper.state('isOpenModal')).toEqual(true);
  });

  it('handle closeModalUpdate  when user click close modal', () => {
    const wrapper = shallow(accountComponent());

    wrapper.instance().setState({
      isOpenModal: true,
    });

    wrapper.instance().closeModalUpdate(true);

    expect(wrapper.state('isOpenModal')).toEqual(false);

  });
});
