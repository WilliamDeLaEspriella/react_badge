import axios from "axios";

axios.defaults.baseURL = 'https://reqres.in/api/';
axios.defaults.timeout = 30000;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = false;

export const UsersRequest = async () => {
    return await axios.get('users')
};

export const UserRequest = async user_id => {
    return await axios.get(`users/${user_id}`)
};

export const DeleteUserRequest = async user_id => {
    return await axios.delete(`users/${user_id}`)
};
