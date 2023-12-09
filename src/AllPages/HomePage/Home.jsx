import About from "./AllSections/About";
import Banner from "./AllSections/Banner";
import Subscription from './AllSections/Subscription';
import Team from './AllSections/Team';
import Blogs from './AllSections/Blogs';
import Featured from "./AllSections/Featured";
import Testimonials from "./AllSections/Testimonials";
import { Helmet } from "react-helmet-async";
import FeaturedClass from "./AllSections/FeaturedClass";


const Home = () => {
    return (
      <div>
        <Helmet>
          <title>Fitness | Home</title>
        </Helmet>
        <Banner></Banner>
        <About></About>
        <Featured></Featured>
        <FeaturedClass></FeaturedClass>
        <Blogs></Blogs>
        <Team></Team>
        <Testimonials></Testimonials>
        <Subscription></Subscription>
      </div>
    );
};

export default Home;