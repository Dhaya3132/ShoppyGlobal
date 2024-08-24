const ProductItem = ({ product }) => { 
    return (
        <div className='border-2 border-green-50 rounded-md w-56 p-2 hover:scale-105 shadow-md'>
            <div className='bg-indigo-50 rounded-md'>
                <img src={product.images} alt="" />
            </div>
            <p className='font-semibold text-2xl mt-2'>${product.price}</p>
            <h2 className='font-medium text-lg'>{product.title.length>=12 ? product.title.slice(0,10)+'...' : product.title}</h2>
            <button className='bg-black text-white font-semibold w-full py-2 px-2 rounded-md mt-2 cursor-pointer'>Add to Cart</button>
        </div>
    )
}
export default ProductItem;