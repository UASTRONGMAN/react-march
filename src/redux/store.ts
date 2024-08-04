import {configureStore, createSlice} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";

type counterStateType = {
    value: number
};

let initialState: counterStateType = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counterSlice1',
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.value = state.value + 1;
        },
        decrement: (state) => {
            state.value = state.value - 1;
        },
        incrementByAmount: (state, action) => {
            state.value = state.value + action.payload;
        }
    }
});

export const store = configureStore({
    reducer: {
        counterSlice: counterSlice.reducer
    }
});

export const {increment, decrement, incrementByAmount} = counterSlice.actions;

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();