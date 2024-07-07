import React, {Component} from 'react';
import {services} from "../services/api.services";
import {IUserModel} from "../models/IUserModel";
import UserComponent from "./UserComponent";

type MyState = {
    users: IUserModel[]
}

interface IProps{
    getPosts: (id: number) => void
}

class UsersComponent extends Component<IProps, MyState> {

    state:MyState = {
        users: []
    }


    componentDidMount() {
        services.users().then(({data}) => this.setState({...this.state, users:data.users}));
    }

    render() {
        // @ts-ignore
        return (
            <div>
                {
                    this.state.users.map(user => <UserComponent key={user.id} user={user} getPosts={this.props.getPosts}/>)
                }
            </div>
        );
    }
}

export default UsersComponent;