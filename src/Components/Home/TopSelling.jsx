import { useFetch } from '../../utils/useFetch';
import ProductItem from '../ProductItem';

const TopSelling = () => {
    const { productData } = useFetch('https://dummyjson.com/products');
    const products = productData && productData.products ? productData.products : [];
    const filterProduct = products.length >= 5 ? products.slice(0, 5) : products;
   
    return (
        <div className='p-5 mt-5 flex flex-col justify-center'>
            <h2 className='font-semibold text-3xl text-center mb-10'>Top Selling</h2>
            <div className='flex flex-wrap justify-center gap-4 items-center'>
                {
                    filterProduct.map((product) => (
                        <ProductItem product={product} key={product.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default TopSelling;