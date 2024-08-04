import React from 'react';
import {decrement, increment, incrementByAmount, useAppDispatch, useAppSelector} from "./redux/store";

const App = () => {

    const {value} = useAppSelector(state => state.counterSlice);

    const dispatch = useAppDispatch();

    return (
        <div>
            <h2>{value}</h2>
            <button onClick={() => {
                dispatch(increment())
            }}>increment</button>

            <button onClick={() => {
                dispatch(decrement())
            }}>decrement</button>

            <button onClick={() => {
                dispatch(incrementByAmount(100))
            }}>increment on 100</button>
        </div>
    );
};

export default App;