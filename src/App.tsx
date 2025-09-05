import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import goodreadsreview from "./GoodreadsReviews";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
       <GoodreadsReviews />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

function Footer() {
  return (
    <footer style={{ textAlign: "center", padding: "1rem" }}>
      <a
        href="https://www.instagram.com/YOUR_HANDLE"
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: "0 10px" }}
      >
        Instagram
      </a>
      <a
        href="https://www.goodreads.com/author/show/YOUR_AUTHOR_ID"
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: "0 10px" }}
      >
        Goodreads
      </a>
    </footer>
  );
}

export default Footer;


export default App;
