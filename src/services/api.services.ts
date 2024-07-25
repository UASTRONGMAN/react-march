import axios, {AxiosResponse} from 'axios'
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";
import {ITodoModel} from "../models/ITodoModel";
import {IResModel} from "../unused/IResModel";

const AxiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {"Content-Type": "application/json"}
});

const services = {
    users: async ():Promise<AxiosResponse<IUserModel[]>> => {
        return await AxiosInstance.get('/users')
    },
    posts: async ():Promise<AxiosResponse<IPostModel[]>> => {
        return await AxiosInstance.get('/posts')
    },
    comments: async ():Promise<AxiosResponse<ICommentModel[]>> => {
        return await AxiosInstance.get('/comments')
    },
    todos: async ():Promise<AxiosResponse<ITodoModel[]>> => {
        return await AxiosInstance.get('/todos')
    },
    userPosts: async (id:number):Promise<AxiosResponse<IPostModel[]>> => {
        return await AxiosInstance.get('/users/'+id+'/posts')
    },
    postComments: async (id:number):Promise<AxiosResponse<ICommentModel[]>> => {
        return await AxiosInstance.get('/posts/'+id+'/comments')
    },
    userTodos: async (id:number):Promise<AxiosResponse<ITodoModel[]>> => {
        return await AxiosInstance.get('/users/'+id+'/todos')
    }
}


const Axiosdummy = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {}
})

const getAll = (): Promise<AxiosResponse<IResModel>> => {
    return Axiosdummy.get('/users')
}
const getAllPagin = (skip: number): Promise<AxiosResponse<IResModel>> => {
    return Axiosdummy.get('/users?skip=' + skip)
}

export {
    services,
    getAll,
    getAllPagin
}