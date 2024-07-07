import axios from 'axios'

const AxiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/users',
})

const services = {
    users: () => {
        return AxiosInstance.get('/users').then(data => data)
    },
    posts: () => {
        return AxiosInstance.get('/posts')
    }
}

export {services}