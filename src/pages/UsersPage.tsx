import React, {useEffect, useState} from 'react';
import {IUserModel} from "../models/IUserModel";
import {services} from "../services/api.services";
import UsersComponent from "../components/users/UsersComponent";
import {Outlet} from "react-router-dom";

const UsersPage = () => {

    const [users, setUsers] = useState<IUserModel[]>([])
    useEffect(() => {
        services.users().then(({data}) => setUsers(data))
    }, []);
    
    return (
        <div>
            <Outlet/>
            <hr/>
            <UsersComponent users={users}/>
        </div>
    );
};

export default UsersPage;