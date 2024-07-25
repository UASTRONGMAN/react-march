import React from 'react';
import css from './header.module.css'
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div className={css.header}>
            <Link to={'reg'}>Registration page</Link> <br/>
            <Link to={'auth'}>Auth page</Link>
        </div>
    );
};

export default HeaderComponent;