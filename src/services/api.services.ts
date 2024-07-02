import axios, {AxiosResponse} from 'axios'
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";

const AxiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {"Content-Type": "application/json"}
})

const services = {
    getAllUsers: async ():Promise<IUserModel[]> => {
        return await AxiosInstance.get('/users').then(value => value.data)
    },
    getAllPostsOfUser: async (id: number): Promise<IPostModel[]> => {
        return await AxiosInstance.get(`/users/${id}/posts`).then(value => value.data)
    }
}

export {services}