import Hero from "@/components/Hero";
import FeaturedBooks from "@/components/FeaturedBooks";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GoodreadsReviews from "@/components/GoodreadsReviews";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <FeaturedBooks />
      <About />
      <Contact />

      {/* Goodreads Reviews at the bottom */}
      <GoodreadsReviews />

      <Footer />
    </div>
  );
};

export default Index;
