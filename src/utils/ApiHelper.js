import axios from 'axios';

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "XCSRF-TOKEN";
axios.defaults.withCredentials = true

export const GET_API = (endpoint) => {
    return axios.get(endpoint).then((res) => {
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
};