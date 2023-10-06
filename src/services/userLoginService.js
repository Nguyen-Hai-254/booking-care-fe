import axios from "../axios";

const handleLoginAPI = (email, password) => {
    return axios.post('/api/login', { email, password });
}

const handleGetAllUser = (id) => {
    return axios.get(`/api/get-all-users?id=${id}`);
}

const handleInsertUser = (data) => {
    return axios.post('/api/insert-user', data)
}

const handleDeleteUser = (id) => {
    return axios.delete('/api/delete-user', { data: { id } });
}

const handleEditUser = (data) => {
    return axios.put('/api/edit-user', data)
}

export { handleLoginAPI, handleGetAllUser, handleInsertUser, handleDeleteUser, handleEditUser };