import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';


const ProductList = () => {
  const [responseData , setResponseData] = useState([]);

  return (
    <div className='flex flex-wrap justify-center items-center gap-4 w-4/5 mx-auto'>
        {
           responseData.map((product)=>(
            <ProductItem product={product} key={product.id} />
           ))
        }
    </div>
  )
}

export default ProductList