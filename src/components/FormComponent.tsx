import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {postService} from "../services/services";
import {IFormModel} from "../models/IFormModel";
import {joiResolver} from "@hookform/resolvers/joi";
import {joiValidator} from "../validators/joi.Validator";

const FormComponent = () => {


    const {handleSubmit, register, formState:{errors}} = useForm<IFormModel>({mode:'all', resolver: joiResolver(joiValidator)});

    const [post, setPost] = useState<IFormModel | null>(null)


    const submit = ({title, body, userId}: IFormModel) => {
        postService({body, userId, title}).then(value => setPost(value.data))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register('title')} placeholder={'title'}/>
                {errors.title && <div>{errors.title.message}</div>}
                <br/>
                <input type="text" {...register('body')} placeholder={'body'}/>
                {errors.body && <div>{errors.body.message}</div>}
                <br/>
                <input type="number" {...register('userId')} placeholder={'user Id'}/>
                {errors.userId && <div>{errors.userId.message}</div>}
                <br/>
                <button>Submit</button>
            </form>
            <div>
                <h2>User id - {post?.userId}.</h2>
                <h2>Title - {post?.title}.</h2>
                <h2>Body - {post?.body}.</h2>
            </div>
        </div>
    );
};

export default FormComponent;