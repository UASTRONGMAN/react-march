import React, {useEffect, useState} from 'react';
import {IUserModel} from "../models/IUserModel";
import {services} from "../services/api.services";
import UsersComponent from "../components/users/UsersComponent";

const UsersPage = () => {

    const [users, setUsers] = useState<IUserModel[]>([])
    useEffect(() => {
        services.users().then(({data}) => setUsers(data))
    }, []);
    
    return (
        <div>
            <UsersComponent users={users}/>
        </div>
    );
};

export default UsersPage;