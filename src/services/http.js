import axios from 'axios';

axios.interceptors.response.use(null, (error) => {
    const expectedError =
        error.response &&
            error.response.status >= 400 &&
            error.response.status < 500
            ? true
            : false;

    if (!expectedError) {
        console.log('Unexpected Error :', error);
        alert('Unexpected Error');
    }

    return Promise.reject(error);
})

axios.defaults.headers.common["Content-Type"] = "application/json; charset=utf-8";

// this is for another day if we are going to use token to use authentication :)
export const setJWT = (jwt) => {
    axios.defaults.headers.common['x-auth-token'] = jwt;
}

export default axios;
