import React from 'react';
import {useForm} from "react-hook-form";
import {IAuthenticationModel} from "../models/IAuthenticationModel";
import {services} from "../services/api.services";

const AuthenticationPage = () => {
    
    const {register, handleSubmit} = useForm<IAuthenticationModel>();
    
    const authentication = (data: IAuthenticationModel) => {
        services.authentication(data)
    }
    
    return (
        <div>
            <h3>Authentification form</h3>
            <form onSubmit={handleSubmit(authentication)}>
                <input type="text" {...register('username')} placeholder={'username'}/>
                <input type="text" {...register('password')} placeholder={'password'}/>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default AuthenticationPage;