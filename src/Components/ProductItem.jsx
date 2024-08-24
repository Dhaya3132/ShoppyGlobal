const ProductItem = ({ product }) => { 
    return (
        <div className='bg-transparent w-64 p-4 hover:scale-105 border-2 border-gray-200 rounded-3xl'>
            <div className='bg-amber-50 rounded-xl'>
                <img src={product.images} alt="" />
            </div>
            <p className='font-semibold text-2xl mt-2'>${product.price}</p>
            <h2 className='font-medium text-lg'>{product.title.length>=12 ? product.title.slice(0,10)+'...' : product.title}</h2>
            <button className='bg-black text-white font-semibold w-full py-2 px-2 rounded-full mt-2 cursor-pointer hover:bg-transparent hover:border-2 hover:border-black hover:text-black'>Add to Cart</button>
        </div>
    )
}
export default ProductItem;