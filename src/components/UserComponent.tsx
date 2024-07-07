import React, {Component} from 'react';
import {IUserModel} from "../models/IUserModel";

interface IProps{
    user: IUserModel,
    getPosts: (id: number) => void
}

class UserComponent extends Component<IProps, {}> {
    render() {
        return (
            <div>
                {this.props.user.id}. {this.props.user.firstName} {this.props.user.lastName} - {this.props.user.age}
                <button onClick={() => {
                    this.props.getPosts(this.props.user.id)
                }}>Get all posts of user</button>
            </div>
        );
    }
}

export default UserComponent;