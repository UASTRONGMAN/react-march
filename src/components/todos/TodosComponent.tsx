import React, {FC} from 'react';
import {ITodoModel} from "../../models/ITodoModel";
import TodoComponent from "./TodoComponent";

interface IProps{
    todos: ITodoModel[]
}

const TodosComponent:FC<IProps> = ({todos}) => {
    return (
        <div>
            {todos.map(todo => <TodoComponent key={todo.id} todo={todo}/>)}
        </div>
    );
};

export default TodosComponent;