import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {postService} from "../services/services";
import {IFormModel} from "../models/IFormModel";

// export interface IFormProps{
//     title: string,
//     body: string,
//     userId: number
// }

const FormComponent = () => {


    const {handleSubmit, register} = useForm<IFormModel>();

    const [post, setPost] = useState<IFormModel | null>(null)

    const submit = ({title, body, userId}: IFormModel) => {
        postService({body, userId, title}).then(value => setPost(value.data))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register('title')}/>
                <br/>
                <input type="text" {...register('body')}/>
                <br/>
                <input type="number" {...register('userId')}/>
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