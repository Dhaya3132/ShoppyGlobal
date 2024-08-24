import React from 'react';
import profile_icon from '../assets/profile_icon.png';
import cart_icon from '../assets/cart_icon.png';
import product_icon from '../assets/product_icon.svg';

const Header = () => {
  return (
    <nav className='p-5 flex justify-between items-center border-2 border-slate-200'>
        <h2 className='font-semibold text-lg '>ShoppyGlobe</h2>
        <ul className='flex gap-6 items-center font-normal text-base'>
            <li>Home</li>
            <li className='flex items-center gap-1'>Products <img src={product_icon} alt="producticon" className='w-5 h-5' /></li>
            <li className='flex items-center gap-1'>Cart<img src={cart_icon} alt="cart_icnon" className='w-5 h-5' /></li>
            <li><img src={profile_icon} alt="profile_icon" className='w-8 h-8 ml-4'/></li>
        </ul>
    </nav>
  )
}
export default Header;