import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    cartItem: []
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addCart: (state,action) => {
            console.log(action.payload)
            state.cartItem.push(action.payload)
            console.log([...state.cartItem]);
        }
    }
})

export const {addCart} = cartSlice.actions;
export default cartSlice.reducer;