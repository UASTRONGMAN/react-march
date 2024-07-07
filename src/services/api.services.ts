import axios, {AxiosResponse} from 'axios'
import {IPostsResponceModel, IUsersResponceModel} from "../models/IResponceModels";

const AxiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
})

const services = {
    users: async ():Promise<AxiosResponse<IUsersResponceModel>> => {
        return await AxiosInstance.get('/users')
    },
    posts: async (id:number):Promise<AxiosResponse<IPostsResponceModel>> => {
        return await AxiosInstance.get(`/posts/user/${id}`)
    }
}

export {services}