import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart, removeCart } from "../utils/cartSlice";
import { useSelector } from "react-redux";
const ProductItem = ({ product }) => {

    const cartItem = useSelector(state => state.cart.cartItem);
    const isCart = cartItem.some((item) => item.id === product.id);

    const dispatch = useDispatch();
    const handleCart = () => {
        console.log('clicked')
        dispatch(addCart(product))
    }

    return (
        <div className='bg-transparent md:w-60 w-full md:hover:scale-105'>
            <Link to={`/products/${product.id}`}>
                <div>
                    <div className='bg-gray-50 flex justify-center'><img src={product.images} alt="product_image" className="w-56 h-56" /></div>
                    <h2 className='font-semibold text-lg mt-1'>{product.title.length >= 12 ? product.title.slice(0, 15) + '...' : product.title}</h2>
                    <p className='font-semibold text-base mt-1 text-Vermillion'>${product.price}</p>
                </div>
            </Link>
        </div>
    )
}
export default ProductItem;