import hero_icon from '../../assets/hero_icon.svg';
import upArrow_icon from '../../assets/upArrow_icon.svg';
const Hero = () => {
    return (
        <section className='bg-bgBanner w-full h-full p-5'>
            <div className="p-5 flex justify-center items-center gap-5 mt-10">
                <div className='w-1/2' id="leftPart">
                    <h2 className="font-semibold text-7xl text-black">Discover new Collection</h2>
                    <p className="font-light text-gray-500 mt-1">Fashion is part of the daily air and it changes all the time, with all the events.</p>
                    <button className="px-12 py-2 text-white font-normal bg-Vermillion mt-4 flex items-center gap-5">Start shopping <img src={upArrow_icon} alt="uparrow" className='w-3 h-3' /></button>
                    <ul className="flex gap-5 font-Poppins mt-5">
                        <li className='border-r-4 border-slate-200 pr-2'><h3 className="font-bold text-3xl">200+</h3><p className="font-light text-medium text-lg">happy Customer</p></li>
                        <li className='border-r-4 border-slate-200 pr-3'><h3 className="font-bold text-3xl">1000+</h3><p className="font-light text-medium text-lg ">Quality products</p></li>
                        <li><h3 className="font-bold text-3xl">100+</h3><p className="font-light text-medium text-lg">international brands</p></li>
                    </ul>
                </div>
                <div className='w-1/4 h-1/4' id='rightPart'>
                    <img src={hero_icon} alt="hero_icon" className='w-full h-full' />
                </div>
            </div>
        </section>
    )
}

export default Hero