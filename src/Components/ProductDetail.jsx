import { useParams } from 'react-router-dom';
import { useFetch } from '../utils/useFetch';

const ProductDetail = () => {
    const {id} = useParams();
    const productId = parseInt(id, 10);
    const {productData} = useFetch(`https://dummyjson.com/products/${productId}`);
    return (
        <div className='h-screen w-full p-5'>
            <div id='left_content' className='w-1/2 bg-orange-100'>
                <h1>{productData.title}</h1>
                {/* <img src={productData.images} alt="" />  */}
            </div>
        </div>
    )
}
export default ProductDetail;