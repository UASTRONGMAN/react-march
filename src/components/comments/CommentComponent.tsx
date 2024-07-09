import React, {FC} from 'react';
import {ICommentModel} from "../../models/ICommentModel";

interface IProps{
    comment: ICommentModel
}

const CommentComponent:FC<IProps> = ({comment}) => {
    return (
        <div>
            {comment.id}. {comment.name} <br/>
            Comment text: {comment.body}. <br/>
            User email: {comment.email}. <hr/>
        </div>
    );
};

export default CommentComponent;