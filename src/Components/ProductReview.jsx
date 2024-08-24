import React from 'react';
import star_icon from '../assets/star_icon.svg';
import { nanoid } from 'nanoid';

const ProductReview = ({productData}) => {
    return (
        <div className='mt-5 p-5'>
            <h2 className='font-semibold text-center text-3xl'>Reviews</h2>
            <ul className="flex md:flex-row flex-col justify-center items-center gap-5 mt-5">
                {productData?.reviews?.length > 0 ? (
                    productData.reviews.map((productData) => (
                        <li className="p-5 border-2 border-black text-black shadow-lg" key={nanoid()}>
                            <div className="flex items-center gap-1 bg-black text-white float-right px-3 py-1 rounded-full">
                                <img src={star_icon} alt="Rating Star" className="w-4 h-4" />
                                <p className='text-xs'>{productData.rating}</p>
                            </div>
                            <div className="mt-10 text-black">
                                <h2 className="font-medium md:text-lg text-base text-gray-500">{productData.reviewerName}</h2>
                                <p className="font-semibold md:text-2xl text-lg">{productData.comment}</p>
                            </div>
                        </li>
                    ))
                ) : ( <p>No reviews available</p> )}
            </ul>
        </div>
    )
}

export default ProductReview;