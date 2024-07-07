import React, {Component} from 'react';
import {IPostModel} from "../models/IPostModel";

interface IProps{
    post: IPostModel
}

class PostComponent extends Component<IProps, {}> {
    render() {
        return (
            <div>
                {this.props.post.id}. {this.props.post.title}
            </div>
        );
    }
}

export default PostComponent;