import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';


const Cart = () => {
  const cartItem = useSelector(state => state.cart.cartItem);  
  return (
    <div>
      {cartItem.map((product)=>(
        <ProductItem product={product} />
      ))}
    </div>
  )
}

export default Cart