import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import FeaturedBooks from "@/components/FeaturedBooks";
import About from "@/components/About";
import Footer from "@/components/Footer";
import GoodreadsReviews from "@/components/GoodreadsReviews";
import AmazonReviews from "@/components/AmazonReviews";
import Contact from "@/components/Contact";


const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <FeaturedBooks />
      <About />
      {/* Goodreads Reviews at the bottom */}
      <GoodreadsReviews />
      <AmazonReviews />
      

     {/* New section for Events */}
    <div className="text-center py-8 bg-gray-50">
      <h2 className="text-2xl font-semibold mb-2">Join My Author Events</h2>
        <p className="text-gray-600 mb-6">
          Meet me in person, hear readings, and get your copy signed.
        </p>
        <Link
        to="/events"
      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition"
      >
    View Events & RSVP
  </Link>
</div>

    
      <Footer />
    </div>
  );
};

export default Index;
