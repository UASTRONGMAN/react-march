import axios from 'axios'
import {IFormModel} from "../models/IFormModel";

const AxiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'content-type': 'application/json; charset=UTF-8'},


})

const postService = async ({body, title, userId}: IFormModel) => {
    return await AxiosInstance.post('/posts', JSON.stringify({
        title: title,
        body: body,
        userId: userId,
    }))
}

export {postService}