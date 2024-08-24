const ProductItem = ({ product }) => { 
    return (
        <div className='bg-transparent w-60 p-4 hover:scale-105 border-2 border-gray-400 rounded-3xl'>
            <div className='bg-transparent rounded-xl'>
                <img src={product.images} alt="" />
            </div>
            <p className='font-semibold text-2xl mt-2'>${product.price}</p>
            <h2 className='font-medium text-lg'>{product.title.length>=12 ? product.title.slice(0,10)+'...' : product.title}</h2>
            <button className='bg-transparent text-black font-medium text-base w-full py-2 px-2 rounded-full mt-2 cursor-pointer hover:bg-black border-2 border-black hover:text-white'>Add to Cart</button>
        </div>
    )
}
export default ProductItem;