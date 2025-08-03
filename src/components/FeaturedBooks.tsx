import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const books = [
  {
    id: 1,
    title: "The Wildflower of Assam",
    subtitle: "Through the eyes of the Wildflower…",
    description: "Thirteen-year-old Shabana enters Assam with her family in search of a better life. Between the 1950s and early 1980s, this historical saga portrays the journey of women - from one country to another, from singlehood to married life, from abject poverty to comfort, and from tolerance to decisiveness.",
    genre: "Historical Saga",
    status: "Available Now",
    year: "2024",
    cover: "/lovable-uploads/31131159-f25d-40b8-b35a-68d81005c942.png",
    amazonLink: "https://www.amazon.com/Wildflower-Assam-Gayatri-Sarkar-ebook/dp/B0FK1TPHD4"
  }
];

const FeaturedBooks = () => {
  return (
    <section className="py-20 bg-warm-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Featured Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover stories that will captivate your heart and transport you to new worlds
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="max-w-4xl">
          {books.map((book, index) => (
            <Card 
              key={book.id} 
              className="group hover:shadow-book transition-all duration-300 hover:-translate-y-2 bg-background border-accent/20 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <div className="flex justify-between items-start mb-4">
                      <Badge 
                        variant={book.status === "Bestseller" ? "default" : book.status === "New Release" ? "secondary" : "outline"}
                        className="mb-2"
                      >
                        {book.status}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{book.year}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                      {book.title}
                    </h3>
                    <h4 className="text-lg text-accent font-medium mb-4">
                      {book.subtitle}
                    </h4>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {book.description}
                    </p>
                    
                    <div className="flex flex-col gap-4">
                      <Badge variant="outline" className="text-literary-navy border-literary-navy">
                        {book.genre}
                      </Badge>
                      <div className="space-y-3">
                        <h5 className="text-sm font-semibold text-primary">Available at:</h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          <Button 
                            variant="literary" 
                            size="sm"
                            onClick={() => window.open('https://amzn.in/d/akgGBbj', '_blank')}
                            className="w-full"
                          >
                            Amazon India
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => window.open('https://amzn.asia/d/2BpcQD8', '_blank')}
                            className="w-full"
                          >
                            Amazon Australia
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => window.open('https://flipkart.com/the-wildflower-of-assam', '_blank')}
                            className="w-full"
                          >
                            Flipkart
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => window.open('https://notionpress.com/in/read/the-wildflower-of-assam', '_blank')}
                            className="w-full"
                          >
                            Notion Press
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => window.open('https://store.pothi.com/book/gayatri-sarkar-wildflower-assam', '_blank')}
                            className="w-full col-span-1 sm:col-span-2"
                          >
                            Pothi
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="order-1 md:order-2 flex justify-center">
                    <div className="relative group-hover:scale-105 transition-transform duration-300">
                      <img 
                        src={book.cover} 
                        alt={`${book.title} book cover`}
                        className="w-64 h-auto rounded-lg shadow-book"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="literary" size="lg">
            View All Books
          </Button>
          </div>
        </div>
        </div>
    </section>
  );
};

export default FeaturedBooks;