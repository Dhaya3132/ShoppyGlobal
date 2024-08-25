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
        },
        removeCart: (state,action) => {
            state.cartItem.filter(product => product.id !== action.payload)
        }
    }
})

export const {addCart,removeCart} = cartSlice.actions;
export default cartSlice.reducer;