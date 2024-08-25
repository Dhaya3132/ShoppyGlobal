import React, { useEffect, useState } from 'react';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = () => {
  const [total, setTotal] = useState();
  const cartItem = useSelector(state => state.cart.cartItem);
  useEffect(()=>{
    setTotal(cartItem.reduce((acc,cum) => acc + parseInt(cum.price),0))
  },[])
  console.log(cartItem)
  return (
    <> 
      {cartItem.length > 0 ? <div className='bg-white w-full p-5 flex md:flex-row flex-col justify-center gap-4'>
      <div className='md:w-1/2 w-full flex flex-col gap-2'>
        {
          cartItem.map((product) => (
            <CartItem product={product} />
          ))
        }
      </div>
      {cartItem.length > 0 && <div id='rightPart' className='bg-gray-100 p-5 md:w-96 w-full h-fit'>
        <h1 className='font-base text-xl'>Order Summary</h1>
        <ul className='mt-5'>
          <li className='font-base text-medium'>Totoal Prducts : {cartItem.length}</li>
          <li className='font-bast text-medium'>Sub total : $ {total}</li>
          <li className='font-bast text-medium'>Tax : $ 3</li>
          <li className='font-bast text-medium'>Total Amount : ${total + 3} </li>
        </ul>
        <button className='w-full bg-black text-white font-normal py-2 px-4 mt-4'>Checkout</button>
      </div>}
    </div> : <p className='font-normal text-lg text-black text-center mt-5'>Your cart is empty</p>}
    </>
  )
}

export default Cart