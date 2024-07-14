import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";
import {Link} from "react-router-dom";

interface IProps{
    post:IPostModel
}

const UserPostComponent:FC<IProps> = ({post}) => {
    return (
        <div>
            <Link to={post.id.toString()+'/comments'} state={post}>{post.id}. {post.title}</Link> <br/>
            {post.body} <hr/>
        </div>
    );
};

export default UserPostComponent;