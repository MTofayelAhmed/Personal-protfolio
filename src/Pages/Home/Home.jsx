import About from "../About/About";
import Experience from "../Experience/Experience";
import Introduction from "../Introduction/Introduction";
import Portfolio from "../Portfolio/Portfolio";
import SocialLink from "../SocialLink/SocialLink";


const Home = () => {
  return (
   <div>
    <Introduction></Introduction>
    <SocialLink></SocialLink>
    <About></About>
    <Portfolio></Portfolio>
    <Experience></Experience>
   </div>
  );
};

export default Home;

