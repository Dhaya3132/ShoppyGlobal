import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import { clearCart } from '../../utils/cartSlice';
import OrderSummary from './OrderSummary';
import ShippingAddress from './ShippingAddress';
import Payment from './Payment';
import PopUp from '../PopUp';

const Checkout = () => {
  const [currentForm, setCurrentForm] = useState('shipping');
  const [confirmOrder, setConfirmOrder] = useState(false);
  const disptach = useDispatch();
  const handleContinue = () => {
    setCurrentForm('payment');
  }
  const handleConfirmOrder = () => {
    setConfirmOrder(true);
    disptach(clearCart())

  }
  return (
    <div>
      <header className='p-5 border-b-2 border-gray-100'>
        <h2 className='font-normal text-lg font-Sacramento'>Shoppy Global</h2>
      </header>

      {!confirmOrder ? <section className='bg-gray-100 p-3 h-full w-full'>
        <div className='flex md:flex-row gap-5 flex-col'>
          <OrderSummary />
          <div className='md:w-1/2 w-full'>
            {currentForm === 'shipping' && <ShippingAddress onContinue={handleContinue} />}
            {currentForm === 'payment' && <Payment onClick={handleConfirmOrder} />}
          </div>
        </div>
      </section>
        :
        <div className='flex flex-col justify-center items-center'>
          <PopUp title={true} />
          <Link to='/products'><button className='bg-Blue text-white font-medium px-6 py-3 mt-5'>Back to shopping</button></Link>
        </div>
      }
    </div>
  )
}

export default Checkout