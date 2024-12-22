import Hero from "../component/Hero/Hero";
import About from "../component/About/About";
import Shop from "../component/Shop/Shop";
// import Example from "../component/Example/Example";
import Brand from "../component/Brand/Brand";
import NewArrivals from "../component/NewArrivals/NewArrivals";
import Test from "../component/Test/Test";
import SlidBrand from "../component/SlidBrand/SlidBrand";
import Footer from "../component/Footer/Footer";

// import Services from "../component/Services/Services";
// import WhereToBuy from "../component/WhereToBuy/WhereToBuy";
// import AppBanner from "../component/AppBanner/AppBanner";
// import Footer from "../component/Footer/Footer";
// import Lenis from "lenis";

const Index = () => {
  return (
    <div className="">
      <Hero />
      <About />
      <Shop />
      <Test />
      <Brand />
      <SlidBrand />
      <NewArrivals />
      <Footer />
    </div>
  );
};

export default Index;
