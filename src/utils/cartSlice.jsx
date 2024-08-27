import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItem: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action) => {
            // console.log(action.payload);
            const products = action.payload;
            const exisitingProduct = state.cartItem.find((product) => product.id === products.id)
            // console.log([...state.cartItem]);
            if(exisitingProduct){
                exisitingProduct.quantity++;
                console.log(exisitingProduct.quantity);
            }
            else{
                state.cartItem.push({...products,quantity:1})
            }
        },
        removeCart: (state, action) => {
            console.log(action.payload)
            state.cartItem = state.cartItem.filter(product => product.id !== action.payload)
        },
        updateQuantity: (state,action) => {
            const {id, quantity} = action.payload;
            const cartProduct = state.cartItem.find(product => product.id === id );
            if(cartProduct){
                cartProduct.quantity = quantity;
            }
        }
    }
})

export const { addCart, removeCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;