import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {services} from "../services/api.services";
import {IRegistrationModel} from "../models/IRegistrationModel";

const RegistrationPage = () => {

    const {register, handleSubmit} = useForm<IRegistrationModel>();

    const registration = (data: IRegistrationModel) => {
        services.registration(data);
    }


    return (
        <div>
            <form onSubmit={handleSubmit(registration)}>
                <input type={'text'} {...register('username')} placeholder={'username'}/>
                <input type={'text'} {...register('password')} placeholder={'password'}/>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default RegistrationPage;