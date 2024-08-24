import search_icon from '../../assets/search_icon.svg';
import ProductList from '../../Components/ProductList';

const Products = () => {
    return (
        <section>
            <section className='flex md:flex-row flex-col md:justify-between justify-center items-center gap-5 mx-auto md:p-5 p-1 mb-10'>
                <h2 className='font-medium md:text-lg text-base'>Shop your <span className='text-sky-600 md:text-3xl text-xl font-medium'>favourite products now</span></h2>
                <div className="flex items-center gap-2">
                    <input type="text" placeholder="Enter a product to search" className="h-10 md:pl-2 md:pr-10 pl-1 pr-5 bg-transparent text-base outline-none border-2 border-black" />
                    <button className="md:px-3 md:py-1 px-1 py-1 bg-black flex items-center gap-1">
                        <h2 className='text-white md:font-base font-sm'>Search</h2>
                        <img src={search_icon} alt="" className='w-8 h-8' />
                    </button>
                </div>
            </section>
            <ProductList />
        </section>
    )
}
export default Products;