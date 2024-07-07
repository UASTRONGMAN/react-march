import axios, {AxiosResponse} from 'axios'
import {IPostsResponceModel, IUsersResponceModel} from "../models/IResponceModels";

const AxiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
})

const services = {
    users: async ():Promise<AxiosResponse<IUsersResponceModel>> => {
        return await AxiosInstance.get('/users')
    },
    posts: async ():Promise<AxiosResponse<IPostsResponceModel>> => {
        return await AxiosInstance.get('/posts')
    }
}

export {services}