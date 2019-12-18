import axios from 'axios';

import * as Types from '../../constant/ActionTypes';
import { NotificationManager } from 'react-notifications';

export function fetchUser(data) {
    return {
      type: Types.FETCH_USER,
      payload: data,
    };
}

export function uploadImage(data) {
    return {
      type: Types.UPLOAD_IMAGE,
      payload: data,
    };
}

export function updateUser(data) {
    return {
      type: Types.UPDATE_USER,
      payload: data,
    };
}

export const actGetUser = () => async (dispatch) => {
  const urlString = Types.API_FETCH_USER;

  axios.get(urlString).then((res) => {

    if (res.status === 200) {
      return dispatch(fetchUser(res.data));

    }
  }).catch((e) => {
    const { response } = e;

    NotificationManager.error(
      'A failure occurred during initialization of services. API will be unavailable.',
      'Error',
      5000
    );
  })
};

export const actUploadImage = request => async (dispatch) => {
    const urlString = Types.API_UPLOAD_IMAGE;

    let data = new FormData();
    data.append('file', request.file);

    axios.post(urlString, data).then((res) => {
  
      if (res.status === 200) {
        return dispatch(uploadImage(res.data));
  
      }
    }).catch((e) => {
      const { response } = e;
      NotificationManager.error(
        'A failure occurred during initialization of services. API will be unavailable.',
        'Error',
        5000
      );
    })
  };


  export const actPostUpdate = request => async (dispatch) => {
    const urlString = Types.API_UPDATE_USER;

    let data = new FormData();

    Object.keys(request).forEach(key => data.append(key, request[key]));

    axios.post(urlString, data).then((res) => {
  
      if (res.status === 200) {
        return dispatch(updateUser(res.data));
  
      }
    }).catch((e) => {
      const { response } = e;
      NotificationManager.error(
        'A failure occurred during initialization of services. API will be unavailable.',
        'Error',
        5000
      );
    })
  };