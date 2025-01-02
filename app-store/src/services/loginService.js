
import axios from "axios";

axios.defaults.baseURL = '/api/';


export const getUser = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
        return null;
    }
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const response = await axios.get('users/me');
    return response.data;
};

export const login = async (email, password) => {
    const response = await axios.post('auth/login', { email, password });
    return response.data.access_token;
}

export const register = async (username,email,password,full_name) => {
    const response = await axios.post('auth/register', {username, password, email, full_name });
    return response.data;
}