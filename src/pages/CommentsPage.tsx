import React, {useEffect, useState} from 'react';
import {ICommentModel} from "../models/ICommentModel";
import {services} from "../services/api.services";
import CommentsComponent from "../components/comments/CommentsComponent";

const CommentsPage = () => {

    const [comments, setComments] = useState<ICommentModel[]>([])

    useEffect(() => {
        services.comments().then(value => setComments(value.data))
    }, []);

    return (
        <div>
            <CommentsComponent comments={comments}/>
        </div>
    );
};

export default CommentsPage;