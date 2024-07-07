import React, {Component} from 'react';
import {services} from "../services/api.services";

class UsersComponent extends Component<any, any> {

    componentDidMount() {
        console.log('awd')
        console.log(services.users().then(value => value.users));
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default UsersComponent;