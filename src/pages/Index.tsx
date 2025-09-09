import Hero from "@/components/Hero";
import FeaturedBooks from "@/components/FeaturedBooks";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GoodreadsReviews from "@/components/GoodreadsReviews";


const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedBooks />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
