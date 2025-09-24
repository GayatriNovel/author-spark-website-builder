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
      <div className="text-center py-12 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-4">Join My Author Events</h2>
        <p className="mb-6 text-gray-600">
          Meet me in person, hear readings, and get your copy signed.
        </p>
        <Link
          to="/events"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition"
        >
          View Events & RSVP
        </Link>
        <Contact />
      </div>
    
      <Footer />
    </div>
  );
};

export default Index;
