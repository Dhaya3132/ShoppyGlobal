import React from 'react';
import { brandLogo } from '../../utils/brandLogo';
const Brandlogo = () => {
  return (
    <div className='mt-10 overflow-hidden whitespace-nowrap'>
        <ul className='flex gap-5 items-center animate-Move '>
            {brandLogo.map((logo,index) => (<li key={index}><img src={logo} alt="logo" className='w-26 h-22'  /></li>))}
        </ul>
    </div>
  )
}
export default Brandlogo