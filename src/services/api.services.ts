import axios from 'axios'
import {IUserModel} from "../models/IUserModel";

const AxiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
})

const services = {
    users: async ():Promise<IUserModel[]> => {
        return await AxiosInstance.get('/users').then(value => value.data)
    },
    posts: () => {
        return AxiosInstance.get('/posts')
    }
}

export {services}