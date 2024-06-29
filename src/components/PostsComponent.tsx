import React, {FC} from 'react';
import {IPostModel} from "../models/IPostModel";

interface IProps{
    posts: IPostModel[]
}

const PostsComponent:FC<IProps> = ({posts}) => {
    return (
        <div>
            {
                posts.map(post => <div key={post.id}>{post.id}. {post.title}</div>)
            }
        </div>
    );
};

export default PostsComponent;