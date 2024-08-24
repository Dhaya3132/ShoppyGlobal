import React from 'react';
import { brandLogo } from '../../utils/brandLogo';
const Brandlogo = () => {
  return (
    <section className='mt-10 overflow-hidden whitespace-nowrap'>
        <ul className='flex gap-5 justify-center items-center animate-Move '>
            {brandLogo.map((logo,index) => (<li key={index} className='flex shrink-0'><img src={logo} alt="logo" className='md:w-26 md:h-22 w-36 h-36 object-contain flex-grow'/></li>))}
        </ul>
    </section>
  )
}
export default Brandlogo;