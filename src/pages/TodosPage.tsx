import React, {useEffect, useState} from 'react';
import {ITodoModel} from "../models/ITodoModel";
import {services} from "../services/api.services";
import TodosComponent from "../components/todos/TodosComponent";

const TodosPage = () => {

    const [todos, setTodos] = useState<ITodoModel[]>([])

    useEffect(() => {
        services.todos().then(value => setTodos(value.data))
    }, []);

    return (
        <div>
            <TodosComponent todos={todos}/>
        </div>
    );
};

export default TodosPage;