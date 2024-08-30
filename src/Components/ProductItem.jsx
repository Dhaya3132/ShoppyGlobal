import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../utils/cartSlice";

const ProductItem = ({ product }) => {
    const dispatch = useDispatch();
    const handleCart = () => {
        dispatch(addCart(product))
    }
    return (
        <div className='bg-transparent md:w-60 w-full md:hover:scale-105'>
            <Link to={`/products/${product.id}`}>
                <div>
                    <div className='bg-LightGreen flex justify-center rounded-lg'><img src={product.images} alt="product_image" className="w-56 h-56 rounded-lg" /></div>
                    <h2 className='font-semibold text-lg mt-1'>{product.title.length >= 12 ? product.title.slice(0, 15) + '...' : product.title}</h2>
                    <p className='font-semibold text-base mt-1 text-Vermillion'>${product.price}</p>
                    <button className="bg-blue-500 px-6 py-2 mt-2" onClick={handleCart}>Add to Cart</button>
                </div>
            </Link>
        </div>
    )
}
export default ProductItem;
// product card