const ProductItem = ({ product }) => { 
    return (
        <div className='bg-transparent md:w-60 md:p-4 w-full p-5 md:hover:scale-105'>
            <div className='bg-sky-50 border-2 border-sky-200 flex justify-center'><img src={product.images} alt="product_image" className="w-56 h-56" /></div>
            <p className='font-semibold text-2xl mt-2'>${product.price}</p>
            <h2 className='font-medium text-lg'>{product.title.length>=12 ? product.title.slice(0,10)+'...' : product.title}</h2>
            <button className='font-medium text-base w-full py-2 px-2 mt-2 cursor-pointer bg-black text-white'>Add to Cart</button>
        </div>
    )
}
export default ProductItem;