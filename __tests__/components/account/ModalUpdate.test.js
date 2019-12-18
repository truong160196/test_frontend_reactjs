/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import Renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import ModalUpdate from '../../../src/components/account/ModalUpdate';

jest.mock('react-redux', () => ({
  connect: (mapState, mapDispatch) => ReactComponent => ReactComponent,
}));
console.warn = () => {};

describe('⚫ ModalUpdate correctly', () => {
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
      },
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

  const uploadImageMock = jest.fn();
  const postUpdateMock = jest.fn();
  const closeModalUpdateMock = jest.fn();

  const accountComponent = () => (
    <ModalUpdate
      account={account}
      uploadImage={uploadImageMock}
      postUpdate={postUpdateMock}
      closeModalUpdate={closeModalUpdateMock}
      isOpenModal={true}
    />
  );

  let accountComponents = Renderer.create(
    accountComponent()
    ,
  );

  it('render accountComponents update begin', () => {
    expect(accountComponents.toJSON()).toMatchSnapshot();
  });

  it('test function closeModal when user click open modal', () => {
    const wrapper = shallow(accountComponent());
    wrapper.instance().closeModal();
  });

  it('test function handleChange when change value input', () => {
    const wrapper = shallow(accountComponent());
    
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: "nameStore",
        value: "Name Store",
      }
    }

    wrapper.instance().handleChange(event);

    expect(wrapper.state('nameStore').value).toEqual("Name Store");

  });

  it('test function handleChange when change value input phone have value is number type', () => {
    const wrapper = shallow(accountComponent());
    
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: "phoneStore",
        value: "121454551",
      }
    }

    wrapper.instance().handleChange(event);

    expect(wrapper.state('phoneStore').value).toEqual("121454551");
    expect(wrapper.state('phoneStore').error).toEqual("");
  });

  it('test function handleChange when change value input phone have value is text type', () => {
    const wrapper = shallow(accountComponent());
    
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: "phoneStore",
        value: "phoneStore",
      }
    }

    wrapper.instance().handleChange(event);

    expect(wrapper.state('phoneStore').value).toEqual("phoneStore");
    expect(wrapper.state('phoneStore').error).toEqual("Please enter a valid phone number");
  });

  it('test function handleSubmit when submit form', () => {
    const wrapper = shallow(accountComponent());
    
    const event = {
      preventDefault: jest.fn(),
    }

    wrapper.instance().handleSubmit(event);
  });


  it('test function handleSelectImage when select image from local', () => {
    const wrapper = shallow(accountComponent());

    wrapper.instance().fileUpload = {
      current: {
        click: jest.fn(),
      }
    };

    wrapper.instance().handleSelectImage();
  });

  it('test function upLoadImage when upload image', () => {
    const wrapper = shallow(accountComponent());

    wrapper.instance().fileUpload = {
      current: {
        click: jest.fn(),
        files: [
          {fileName: 'example.jpg'}
        ]
      }
    };
    
    wrapper.instance().upLoadImage();
  });

  it('test function upLoadImage when upload image when have not file', () => {
    const wrapper = shallow(accountComponent());

    wrapper.instance().fileUpload = {
      current: {
        click: jest.fn(),
        files: []
      }
    };
    
    wrapper.instance().upLoadImage();
  });


  it('test function componentWillReceiveProps when have image data', () => {
    const wrapper = shallow(accountComponent());
    
    wrapper.instance().setState({
      imageAvatar: null,
    });

    const props = {
      account: {
        image: 'http://example.jpg',
      }
    }

    wrapper.instance().componentWillReceiveProps(props);

    expect(wrapper.state('imageAvatar')).toEqual("http://example.jpg");
  });

  it('test function componentWillReceiveProps when have not image data', () => {
    const wrapper = shallow(accountComponent());
    
    wrapper.instance().setState({
      imageAvatar: "http://example.jpg",
    });

    const props = {
      account: {
        image: 'http://example.jpg',
      }
    }

    wrapper.instance().componentWillReceiveProps(props);

    expect(wrapper.state('imageAvatar')).toEqual("http://example.jpg");
  });
});
