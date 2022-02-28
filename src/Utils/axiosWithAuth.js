import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    const user_id = localStorage.getItem('user_id')

    return axios.create({
        headers: { 
            authorization: token,
            user_id: user_id,
        },
        baseURL: 'https://potluckplan.herokuapp.com/api'
    })
}

export default axiosWithAuth;