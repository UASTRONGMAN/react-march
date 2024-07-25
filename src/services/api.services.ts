import axios, {AxiosResponse} from 'axios'
import {IRegistrationModel} from "../models/IRegistrationModel";
import {IAuthenticationModel} from "../models/IAuthenticationModel";
import {ITokensModel} from "../models/ITokensModel";

const axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v2',
});

const services = {
    registration: async (data: IRegistrationModel) => {
        return await axiosInstance.post('/users', data)
    },
    authentication: async (data: IAuthenticationModel): Promise<AxiosResponse<ITokensModel>> => {
       return  await axiosInstance.post('/auth', data)
    }
}

export {services}