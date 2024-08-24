const ProductItem = ({ product }) => { 
    return (
        <div className='bg-transparent w-60 p-4 hover:scale-105'>
            <div className='bg-sky-50 border-2 border-sky-200'><img src={product.images} alt="" /></div>
            <p className='font-semibold text-2xl mt-2'>${product.price}</p>
            <h2 className='font-medium text-lg'>{product.title.length>=12 ? product.title.slice(0,10)+'...' : product.title}</h2>
            <button className='font-medium text-base w-full py-2 px-2 mt-2 cursor-pointer bg-black text-white'>Add to Cart</button>
        </div>
    )
}
export default ProductItem;