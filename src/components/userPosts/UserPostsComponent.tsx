import React, {useEffect, useState} from 'react';
import {Location, Outlet, useLocation} from "react-router-dom";
import {services} from "../../services/api.services";
import {IPostModel} from "../../models/IPostModel";
import UserPostComponent from "./UserPostComponent";
import {IUserModel} from "../../models/IUserModel";

const UserPostsComponent = () => {

    let location: Location<IUserModel> = useLocation();
    let state = location.state

    const [posts, setPosts] = useState<IPostModel[]>([])

    useEffect(() => {
        services.userPosts(state.id).then(value => setPosts(value.data))
    }, [state.id]);
    return (
        <div>
            <Outlet/>
            <hr/>
            {posts.map(post => <UserPostComponent key={post.id} post={post}/>)}
        </div>
    );
};

export default UserPostsComponent;