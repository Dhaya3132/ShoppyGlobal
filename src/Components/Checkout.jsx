import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const [total, setTotal] = useState();
  const cartItem = useSelector(state => state.cart.cartItem);
  useEffect(() => {
    setTotal(cartItem.reduce((acc, cum) => acc + parseInt(cum.price), 0))
  }, [])
  return (
    <div>
      <header className='p-5 border-b-2 border-gray-100'>
        <h2 className='font-normal text-lg font-Sacramento'>Shoppy Global</h2>
      </header>

      <div className='flex md:flex-row'>
        <div className='md:w-1/3 bg-white p-5 w-full'>
          <h2 className='font-medium text-lg'>Order Summary</h2>
          <ul className='p-3 mt-3 bg-neutral-50 border-2 border-slate-200 rounded-lg'>
            {cartItem.map((product) => (
              <li className='flex gap-3 mb-3'>
                <div className='bg-white rounded-lg border-2 border-slate-200 w-fit'>
                  <img src={product.images} alt="product" className='w-22 h-32' />
                </div>
                <div>
                  <h2 className='font-normal text-xl'>{product.title}</h2>
                  <p className='font-semibold text-lg'>$ {product.price}</p>
                  <p className='font-light text-base text-gray-600'>Quantity : {product.quantity}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-5 bg-black text-white p-5 rounded-lg">
            <p className='font-light text-lg'>Total Products: {cartItem.length}</p>
            <p className='font-light'>Subtotal: ${total}</p>
            <p className='font-light'>Tax: $3</p>
            <p className="font-medium bg-Blue text-white pl-3 pr-3 py-3 mt-2 rounded-md">Total: $ {total + 3}</p>
          </div>
        </div>
        <div className='md:w-2/3 w-full'>
           
        </div>
      </div>
    </div>
  )
}

export default Checkout