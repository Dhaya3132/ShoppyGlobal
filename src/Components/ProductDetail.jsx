import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { useFetch } from '../utils/useFetch';
import { addCart } from '../utils/cartSlice'
import ProductReview from './ProductReview';
import PopUp from './PopUp';

const ProductDetail = () => {
    
    const { id } = useParams();
    const productId = parseInt(id, 10);
    const [popUp, setPopup] = useState(false);
    const { productData } = useFetch(`https://dummyjson.com/products/${productId}`);
    const dispatch = useDispatch();
    const handleAddCart = () => {
        dispatch(addCart(productData));
        setPopup(true);
        setTimeout(() => { setPopup(false)}, 2000)
    }
    return (
        <div>
            {popUp && <PopUp />}
            <div className='w-full md:p-2 flex flex-col md:flex-row md:justify-center justify-center  p-5 gap-5 mt-10 '>
                <div className='md:w-3/12 w-4/5 flex flex-shrink-0 bg-gray-100 rounded-sm p-5'>
                    <img src={productData.images} alt="product_image" className='w-full h-full object-contain' />
                </div>
                <div className='md:w-1/2 w-full'>
                    <h2 className='font-medium md:text-4xl text-3xl mb-1'>{productData.title}</h2>
                    <p className='font-light text-base text-gray-400'>{productData.description}</p>
                    <div className='flex items-center gap-2 mt-2'>
                        <p className='font-semibold text-3xl'>${productData.price}</p>
                        <p className='bg-green-100 border-2 border-green-200 text-xs font-base px-3 py-1 rounded-full'>Off {productData.discountPercentage}%</p>
                    </div>
                    <div className='flex items-center gap-5 mt-4'>
                        <button className='px-6 py-1.5 text-white font-medium bg-Blue' onClick={handleAddCart}>Add to cart</button>
                        <button className='px-6 py-1.5 text-black font-medium border-2 border-black'>Wishlist</button>
                    </div>
                    <div className='w-fit mt-5'>
                        <ul className='flex gap-2 items-center'>
                            <li className='border-2 border-gray-200 p-3 md:text-sm text-xs'>{productData.warrantyInformation}</li>
                            <li className='border-2 border-gray-200 p-3 md:text-sm text-xs'>{productData.shippingInformation}</li>
                            <li className='border-2 border-gray-200 p-3 md:text-sm text-xs'>{productData.returnPolicy}</li>
                        </ul>
                    </div>
                    <section className='bg-gray-100 mt-6 p-5'>
                        <h2 className='font-medium text-black text-lg'>Product Information</h2>
                        <ul id="about" className='mt-3'>
                            <li className='text-black text-sm'>Brand : {productData.brand}</li>
                            <li className='text-black text-sm'>Minimum Order Quantity : {productData.minimumOrderQuantity}</li>
                            <li className='text-black text-sm'>In Stock : {productData.stock}</li>
                            <li className='text-black text-sm'>Weight : {productData.weight}gms</li>
                            <li className='text-black text-sm'>
                                Dimensions:
                                {productData?.dimensions ? ` ${productData.dimensions.width} x ${productData.dimensions.height} x ${productData.dimensions.depth}` : 'N/A'}
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
            <ProductReview productData={productData} />
        </div>
    )
}
export default ProductDetail;