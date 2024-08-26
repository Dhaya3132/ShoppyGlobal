import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeCart } from '../utils/cartSlice';


const CartItem = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeCart(product.id))
  }
  return (
      <div id='leftPart' className='bg-white border-b-2 border-gray-500 p-5 flex gap-4'>
        <div className='md:w-48 md:h-48 w-32 h-32'>
          <img src={product.images} alt="product_image" className='w-full h-full bg-indigo-100 p-1' />
        </div>
        <div>
          <h2 className='font-medium text-xl'>{product.title}</h2>
          <p className='font-semibold text-3xl text-black'>$ {product.price}</p>
          <div className='mt-2 flex gap-4 items-center'>
            <p className='text-lg font-base'>Quantity</p>
            <div className='flex gap-2 items-center mt-2'>
              <button className='bg-black px-3 py-1 text-white' onClick={() => setQuantity(quantity + 1)}>+</button>
              <p>{quantity}</p>
              <button className='bg-black  px-3 py-1 p-1 text-white' onClick={() => setQuantity(quantity - 1)}>-</button>
            </div>
          </div>
          <div className='mt-10 flex gap-5'>
            <button className='md:px-6 md:py-1.5 px-3 py-1 bg-black text-white text-sm md:text-base font-medium' onClick={handleRemove}>Remove item</button>
            <button className='md:px-6 md:py-1.5 px-3 py-1 text-black font-medium border-2 text-sm md:text-base border-black'>Save later</button>
          </div>
        </div>
      </div>
  )
}

export default CartItem