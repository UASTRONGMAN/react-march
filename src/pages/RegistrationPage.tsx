import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {services} from "../services/api.services";
import {IRegistrationModel} from "../models/IRegistrationModel";
import {useNavigate} from "react-router-dom";

const RegistrationPage = () => {

    const {register, handleSubmit} = useForm<IRegistrationModel>();

    const nav = useNavigate();

    const [isReg, setIsReg] = useState<number>(1)

    const registration = (data: IRegistrationModel) => {
        services.registration(data).then(value => setIsReg(value.status))
        if (isReg === 201 || 200) {
            nav('/auth')
        }
    }
    



    return (
        <div>
            <h3>Registration form</h3>
            <form onSubmit={handleSubmit(registration)}>
                <input type={'text'} {...register('username')} placeholder={'username'}/>
                <input type={'text'} {...register('password')} placeholder={'password'}/>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default RegistrationPage;