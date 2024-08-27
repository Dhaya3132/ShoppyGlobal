import HeroSecotion from '../../Components/Home/Hero';
import BrandlogoSection from '../../Components/Home/Brandlogo';
import NewArrivalSection from '../../Components/Home/NewArrival';
import TopSellingSection from '../../Components/Home/TopSelling';
import FeedbackSection from '../../Components/Home/Feedback';
import Footer from '../../Components/Footer';

const Home = () => {
    return (
        <div id='homePage'>
            <HeroSecotion />
            <BrandlogoSection />
            <section className='mt-20'>
                <NewArrivalSection />
                <TopSellingSection />
                <FeedbackSection />
            </section>
            <Footer />
        </div>
    )
}
export default Home;