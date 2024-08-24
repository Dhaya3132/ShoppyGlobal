import { useFetch } from '../../utils/useFetch';
import ProductItem from '../ProductItem';
const NewArrival = () => {
    const { productData } = useFetch('https://dummyjson.com/products');
    const filterProduct = productData.length >= 5 ? productData.slice(0, 5) : productData;
    return (
        <div className='pb-8 '>
            <h2 className='font-semibold text-3xl text-center mb-10'>New Arrivals</h2>
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

export default NewArrival;