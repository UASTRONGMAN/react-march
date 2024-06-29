import React, {useEffect, useState} from 'react';
import {IUserModel} from "../models/IUserModel";
import {services} from "../services/api.services";
import UserComponent from "./UserComponent";
import {IPostModel} from "../models/IPostModel";
import PostsComponent from "./PostsComponent";

const UsersComponent = () => {

    const [users, setUsers] = useState<IUserModel[]>([])
    const [posts, setPosts] = useState<IPostModel[]>([])

    useEffect(() => {
        services.getAllUsers().then(value => setUsers(value))
    }, []);

    const getAllPosts = (id: number) => {
        services.getAllPostsOfUser(id).then(value => setPosts(posts))
    }

    return (
        <div>
            <div>
                {
                users.map(user => <UserComponent user={user} key={user.id} getAllPosts={getAllPosts}/>)
                }
            </div>
            <div>
                <PostsComponent posts={posts}/>
            </div>
        </div>

    );
};

export default UsersComponent;