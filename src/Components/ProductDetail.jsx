import { useParams } from 'react-router-dom';
import { useFetch } from '../utils/useFetch';

const ProductDetail = () => {
    const {id} = useParams();
    const productId = parseInt(id, 10);
    const {productData} = useFetch(`https://dummyjson.com/products/${productId}`)
    console.log(productData);
    return (
        <div>
            <h2>hello</h2>
        </div>
    )
}
export default ProductDetail;