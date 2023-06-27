import About from "../About/About";
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
   </div>
  );
};

export default Home;

