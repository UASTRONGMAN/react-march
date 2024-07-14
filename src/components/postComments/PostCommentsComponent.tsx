import React, {useEffect, useState} from 'react';
import {Location, useLocation} from "react-router-dom";
import {IPostModel} from "../../models/IPostModel";
import {ICommentModel} from "../../models/ICommentModel";
import {services} from "../../services/api.services";
import PostCommentComponent from "./PostCommentComponent";

const PostCommentsComponent = () => {
    let location: Location<IPostModel> = useLocation();
    let state = location.state

    const [comments, setComments] = useState<ICommentModel[]>([])

    useEffect(() => {
        services.postComments(state.id).then(value => setComments(value.data))
    }, [state.id]);

    return (
        <div>
            {comments.map(comment => <PostCommentComponent key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default PostCommentsComponent;