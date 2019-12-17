import axios from 'axios';

import * as Types from '../constants/ActionTypes';

export const DefaultAPI = {};

export const ApiHelper = {
  async call(endpoint, body, method = 'GET', header = {}, responseTypes = 'json') {
    const headerApi = header;
    if (!header.sessionId) {
      const user = await getCookie(Types.NAME_COOKIE);

      if (user) {
        const userSession = JSON.parse(user);
        headerApi.sessionId = userSession.sessionId;
      }
    }

    return axios({
      method,
      url: `${endpoint}`,
      data: body,
      headers: headerApi,
      responseType: responseTypes,
    }).then((res) => {
      if (res.status !== 200) {
        res.data = {};
      }

      return res;
    }).catch((e) => {
      const { response } = e;
      console.error(e);

      let result = {
        data: {
          error: 'A failure occurred during initialization of services. API will be unavailable.',
        },
      };

      if (response) {
        result = {
          data: {
            error: (
              response.data && response.data.msg ? response.data.msg
                : e.message || 'Origin has been blocked by CORS policy'
            ),
            errors: response.data && response.data.errors ? response.data.errors : [],
          },
          status: (e.response && e.response.status ? e.response.status : 403),
        };
      }


      return result;
    });
  },
};