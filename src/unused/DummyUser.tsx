import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {IDummyModel} from "./IDummyModel";

interface IProps{
    user: IDummyModel
}

const DummyUser:FC<IProps> = ({user}) => {
    return (
        <div>
            <Link to={user.id.toString()} state={user}>{user.id}. {user.firstName} {user.lastName}</Link>

        </div>
    );
};

export default DummyUser;