import React from 'react';
import {Link} from "react-router-dom";

const styleObj = {textDecoration: "none", color: "darkred", fontSize: "20px"}

const HeaderComponent = () => {

    return (
        <div>
            <Link to={'/'}  style={styleObj}>Home page</Link> <br/>
            <Link to={'/users'}  style={styleObj}>Users page</Link> <br/>
            <Link to={'/posts'}  style={styleObj}>Posts page</Link><br/>
            <Link to={'/comments'}  style={styleObj}>Comments page</Link><br/>
            <Link to={'/todos'}  style={styleObj}>Todos page</Link><br/>
            <Link to={'/DummyJSON'}  style={styleObj}>Dummy</Link><br/>
        </div>
    );
};

export default HeaderComponent;