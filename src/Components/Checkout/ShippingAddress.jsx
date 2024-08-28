import React from 'react'

const ShippingAddress = ({onContinue}) => {
    return (
        <div className='p-5 bg-white rounded-md shadow-md'>
            <h2 className='font-semibold text-xl'>Shipping Address</h2>
            <form className='w-full mt-5'>
                <div className='flex flex-col mb-2'>
                    <label className='mb-1 font-medium'>Address</label>
                    <input type="text" name="address" placeholder='Enter your address' className='bg-transparent border-2 border-gray-300 rounded-lg h-12 py-1 pl-2 pr-3 outline-none' required />
                </div>
                <div className='flex flex-col mb-2'>
                    <label className='mb-1 font-medium'>City</label>
                    <input type="text" name="city" placeholder='Enter your City' className='bg-transparent border-2 border-gray-300 rounded-lg h-12 py-1 pl-2 pr-3 outline-none' required />
                </div>
                <div className='flex flex-col mb-2'>
                    <label className='mb-1 font-medium'>State</label>
                    <input type="text" name="state" placeholder='Enter your State' className='bg-transparent border-2 border-gray-300 rounded-lg h-12 py-1 pl-2 pr-3 outline-none' required />
                </div>
                <div className='flex flex-col mb-2'>
                    <label className='mb-1 font-medium'>ZIP Code</label>
                    <input type="text" name="code" placeholder='Enter your pin code' className='bg-transparent border-2 border-gray-300 rounded-lg h-12 py-1 pl-2 pr-3 outline-none' required />
                </div>
                <button className='bg-Blue text-white font-medium px-4 py-3 w-full mt-3 rounded-md' id='btn' type='button' onClick={onContinue}>
                    Continue
                </button>
            </form>
        </div>
    )
}

export default ShippingAddress