import { useFetch } from "../../utils/useFetch";
import star_icon from '../../assets/star_icon.svg';
import { nanoid } from 'nanoid';

const Feedback = () => {
    const { productData } = useFetch('https://dummyjson.com/products');
    const products = productData && productData.products ? productData.products : [];

    return (
        <section className="mt-10 mb-10">
            <h2 className="font-semibold text-3xl text-center">Our <span className="text-Vermillion">happy Customer</span></h2>
            <div className="overflow-hidden whitespace-nowrap mt-10">
                <ul className="flex justify-center items-center gap-5 animate-Move">
                    {products.map((product) => ( product.reviews.filter( review => review.rating > 4 ).map((reviews) => (
                        <li className="rounded-sm p-5 border-2 border-black shadow-lg bg-amber-50" key={nanoid()}>
                            <div className="flex items-center gap-1 bg-black text-white float-right px-3 py-1 rounded-full">
                                <img src={star_icon} alt="" className="w-4 h-4" />
                                <p>{reviews.rating}</p>
                            </div>
                            <div className="mt-10 text-black">
                                <h2 className="font-semibold text-lg text-amber-500">{reviews.reviewerName}</h2>
                                <p className="font-semibold text-2xl">{reviews.comment}</p>
                            </div>
                        </li>
                    ))))}
                </ul>
            </div>
        </section>
    )
}
export default Feedback;