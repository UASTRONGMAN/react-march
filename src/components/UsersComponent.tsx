import React, {Component} from 'react';
import {services} from "../services/api.services";
import {IUserModel} from "../models/IUserModel";
import UserComponent from "./UserComponent";

type MyState = {
    users: IUserModel[]
}

class UsersComponent extends Component<{}, MyState> {

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
                    this.state.users.map(user => <UserComponent key={user.id} user={user}/>)
                }
            </div>
        );
    }
}

export default UsersComponent;