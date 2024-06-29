import React, {FC} from 'react';
import {IUserModel} from "../models/IUserModel";
import {services} from "../services/api.services";

interface IProps {
    user: IUserModel
    getAllPosts: (id: number) => void
}

const UserComponent:FC<IProps> = ({user, getAllPosts}) => {
    return (
        <div>
            {user.id}. {user.name}
            <button onClick={() => {
                getAllPosts(user.id)
            }}>Get posts of this user</button>
        </div>
    );
};

export default UserComponent;