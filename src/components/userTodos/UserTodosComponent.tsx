import React, {useEffect, useState} from 'react';
import {Location, useLocation} from "react-router-dom";
import {IUserModel} from "../../models/IUserModel";
import {ITodoModel} from "../../models/ITodoModel";
import {services} from "../../services/api.services";
import UserTodoComponent from "./UserTodoComponent";

const UserTodosComponent = () => {

    let location: Location<IUserModel> = useLocation();
    let state = location.state

    const [todos, setTodos] = useState<ITodoModel[]>([]);

    useEffect(() => {
        services.userTodos(state.id).then(value => setTodos(value.data))
    }, [state.id]);

    return (
        <div>
            {todos.map(todo => <UserTodoComponent key={todo.id} todo={todo}/>)}
        </div>
    );
};

export default UserTodosComponent;