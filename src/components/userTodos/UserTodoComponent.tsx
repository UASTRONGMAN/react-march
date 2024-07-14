import React, {FC} from 'react';
import {ITodoModel} from "../../models/ITodoModel";

interface IProps{
    todo: ITodoModel
}

const UserTodoComponent: FC<IProps> = ({todo}) => {
    return (
        <div>
            {todo.id}. {todo.title}. <br/>
            Status - {todo.completed.toString()}. <hr/>
        </div>
    );
};

export default UserTodoComponent;