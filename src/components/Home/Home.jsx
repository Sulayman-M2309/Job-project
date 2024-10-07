import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";


const Home = () => {
    return (
        <div>
        <div className="max-w-7xl mx-auto">
        <Banner></Banner>
        <CategoryList></CategoryList>
        </div>
          <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;