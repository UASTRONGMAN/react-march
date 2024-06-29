import axios from 'axios'

const AxiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {"Content-Type": "application/json"}
})

const services = {
    getAllUsers: async () => {
        return await AxiosInstance.get('/users').then(value => value.data)
    },
    getAllPostsOfUser: async (id: number) => {
        return await AxiosInstance.get(`/users/${id}/posts`).then(value => value.data)
    }
}

export {services}