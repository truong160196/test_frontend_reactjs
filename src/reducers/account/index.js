import * as Types from '../../constant/ActionTypes';

const initialState = {
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
};

const account = (state = initialState, action = {}) => {
  switch (action.type) {
    case Types.FETCH_USER:
      state.user = action.payload && action.payload.data ? action.payload.data : {};

      if (state.user && state.user.id) {
        state.model.idStore = state.user.id;
      };

      if (state.user && state.user.name) {
        state.model.nameStore.value = state.user.name;
      };

      if (state.user && state.user.address) {
        state.model.addressStore.value = state.user.address;
      };

      if (state.user && state.user.district) {
        state.model.districtStore.value = state.user.district;
      };

      if (state.user && state.user.city) {
        state.model.cityStore.value = state.user.city;
      };

      if (state.user && state.user.phone) {
        state.model.phoneStore.value = state.user.phone;
      };

      if (state.user && state.user.logoUrl) {
        state.model.imageAvatar = state.user.logoUrl;
      };

      if (state.user && state.user.redInvoices && state.user.redInvoices.id) {
        state.model.idRedInvoice = state.user.redInvoices.id
      };

      if (state.user && state.user.redInvoices && state.user.redInvoices.name) {
        state.model.nameRedInvoice.value = state.user.redInvoices.name
      };

      if (state.user && state.user.redInvoices && state.user.redInvoices.address) {
        state.model.addressRedInvoice.value = state.user.redInvoices.address
      };

      if (state.user && state.user.redInvoices && state.user.redInvoices.district) {
        state.model.districtRedInvoice.value = state.user.redInvoices.district
      };

      if (state.user && state.user.redInvoices && state.user.redInvoices.city) {
        state.model.cityRedInvoice.value = state.user.redInvoices.city
      };

      if (state.user && state.user.redInvoices && state.user.redInvoices.taxCode) {
        state.model.taxRedInvoice.value = state.user.redInvoices.taxCode
      };

      return { ...state };

    case Types.UPDATE_USER:
      state.userPost = action.payload && action.payload.data ? action.payload.data : {};
      return { ...state };

    case Types.UPLOAD_IMAGE:
      state.image =  action.payload && action.payload.path ? action.payload.path : {};
      return { ...state };

    default: return { ...state };
  }
};

export default account;