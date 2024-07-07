import React, {Component} from 'react';
import {services} from "../services/api.services";

class UsersComponent extends Component {

    componentDidMount() {
        console.log(services.users());
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default UsersComponent;