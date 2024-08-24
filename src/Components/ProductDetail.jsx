import { useParams } from 'react-router-dom';
import { useFetch } from '../utils/useFetch';

const ProductDetail = () => {
    const { id } = useParams();
    const productId = parseInt(id, 10);
    const { productData } = useFetch(`https://dummyjson.com/products/${productId}`);

    return (
        <div className='p-5 flex gap-4'>
            <div id='left_content' className='bg-WhiteSmoke w-1/3 h-1/4 rounded-2xl border-2 border-slate-200'>
                <img src={productData.images} alt="product_image" className='w-full h-full object-cover' />
            </div>
            <div id='right_content' className='w-1/2'>
                <p className='px-3 py-1 bg-green-200 border-2 border-green-300 text-black text-xs font-semibold rounded-full mb-1 w-fit'>Off {productData.discountPercentage}%</p>
                <h2 className='text-4xl font-base mb-2'>{productData.title}</h2>
                <p className='text-medium font-light'>{productData.description}</p>
            </div>
        </div>
    )
}
export default ProductDetail;