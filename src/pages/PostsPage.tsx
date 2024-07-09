import React, {useEffect, useState} from 'react';
import {IPostModel} from "../models/IPostModel";
import {services} from "../services/api.services";
import PostsComponent from "../components/posts/PostsComponent";

const PostsPage = () => {

    const [posts, setPosts] = useState<IPostModel[]>([])

    useEffect(() => {
        services.posts().then(value => setPosts(value.data))
    }, []);

    return (
        <div>
            <PostsComponent posts={posts}/>
        </div>
    );
};

export default PostsPage;