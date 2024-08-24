import Hero from '../../Components/Home/Hero';
import Brandlogo from '../../Components/Home/Brandlogo';
import NewArrival from '../../Components/Home/NewArrival';
import TopSelling from '../../Components/Home/TopSelling';
import Feedback from '../../Components/Home/Feedback';
import Footer from '../../Components/Footer';
const Home = () => {
    return (
        <>
            <Hero />
            <Brandlogo />
            <section className='mt-20'><NewArrival /><TopSelling /><Feedback /></section>
            <Footer />

        </>

    )
}
export default Home;