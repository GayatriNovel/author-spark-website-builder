import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

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
                            onClick={() => window.open('https://www.flipkart.com/search?q=the+wildflower+of+assam&sid=bks&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_17_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_17_na_na_na&as-pos=1&as-type=RECENT&suggestionId=the+wildflower+of+assam%7CBooks&requestId=c0e84e0c-b89f-428c-9d69-298a1ff7d716&as-searchtext=the%20wildflower%20of%20assam', '_blank')}
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

                    <article className="mt-8 border-t border-accent/20 pt-6" aria-label="Amazon review">
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <h5 className="text-sm font-semibold text-primary">Amazon review</h5>
                        <div className="flex items-center gap-1 text-accent" aria-label="5 out of 5 stars">
                          <Star className="w-4 h-4" fill="currentColor" />
                          <Star className="w-4 h-4" fill="currentColor" />
                          <Star className="w-4 h-4" fill="currentColor" />
                          <Star className="w-4 h-4" fill="currentColor" />
                          <Star className="w-4 h-4" fill="currentColor" />
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">Reviewed in India on 2 August 2025</p>
                      <p className="font-semibold text-primary mb-2">A Touching Story of Strength and Hope</p>
                      <blockquote className="text-muted-foreground leading-relaxed">
                        After a long time really enjoyed reading book. The book follows the journey of a young girl. I liked how the author showed the real struggles of women, including dealing with family problems and finding their own way. The writing paints a beautiful picture of Assam and shows both its peace and its difficult moments. If you like stories about resilience and personal growth set in a rich cultural background, I recommend this book. Looking forward to reading more books from Gayatri Sarkar.
                      </blockquote>
                      <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify({
                          "@context": "https://schema.org",
                          "@type": "Book",
                          name: book.title,
                          author: { "@type": "Person", name: "Gayatri Sarkar" },
                          url: "https://amzn.in/d/akgGBbj",
                          review: {
                            "@type": "Review",
                            name: "A Touching Story of Strength and Hope",
                            reviewBody: "After a long time really enjoyed reading book. The book follows the journey of a young girl. I liked how the author showed the real struggles of women, including dealing with family problems and finding their own way. The writing paints a beautiful picture of Assam and shows both its peace and its difficult moments. If you like stories about resilience and personal growth set in a rich cultural background, I recommend this book. Looking forward to reading more books from Gayatri Sarkar.",
                            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                            author: { "@type": "Person", name: "Amazon customer" },
                            datePublished: "2025-08-02",
                            publisher: { "@type": "Organization", name: "Amazon India" }
                          }
                        }) }}
                      />
                    </article>
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
        
        </div>
        </div>
    </section>
  );
};

export default FeaturedBooks;