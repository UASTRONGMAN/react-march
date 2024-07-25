import React, {useEffect, useState} from 'react';
import {getAll, getAllPagin} from "../services/api.services";
import {IDummyModel} from "./IDummyModel";
import DummyUser from "./DummyUser";
import {Outlet, useSearchParams} from "react-router-dom";
import PaginationComponent from "./PaginationComponent";

const DummyJsonUsersComponent = () => {

    let [query] = useSearchParams();
    let page = query.get('page');

    const [users, setUsers] = useState<IDummyModel[]>([])

    useEffect(() => {
        if (page) {
            let skip: number = +page *30 - 30
            getAllPagin(skip).then(value => setUsers(value.data.users))
        } else {
            getAll().then(value => setUsers(value.data.users))
        }
    }, [page]);



    return (

        <div>
            <Outlet/>
            {users.map(user => <DummyUser user={user} key={user.id}/>)}
            <PaginationComponent/>
        </div>
    )
};

export default DummyJsonUsersComponent;