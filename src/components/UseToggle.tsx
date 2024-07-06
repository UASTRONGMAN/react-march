import React from 'react';
import {useToggle} from "./customhooks";

const UseToggle = () => {



    let {toggle, handleToggle} = useToggle(true)


    return (
        <div>
            <button onClick={() => {
                handleToggle()
            }}>toggle - {toggle +''}</button>
            <h1>{toggle}</h1>
        </div>
    );
};

export default UseToggle;