import React, {FC} from 'react';
import {IUserModel} from "../../models/IUserModel";
import {Link} from "react-router-dom";

interface IProps{
    user: IUserModel
}

const UserComponent:FC<IProps> = ({user}) => {

    return (
        <div>
            {user.id}. {user.name} {user.username}
            <br/>
            <Link to={user.id.toString()+'/posts'} state={user}>Get all posts of user</Link> <br/>
            <Link to={user.id.toString()+'/todos'} state={user}>Get all todos of user</Link>
        </div>
    );
};

export default UserComponent;