import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const books = [
  {
    id: 1,
    title: "Whispers in the Rain",
    subtitle: "A Tale of Love and Loss",
    description: "A heart-wrenching story about finding hope in the darkest moments and the power of human connection.",
    genre: "Romance",
    status: "Bestseller",
    year: "2023"
  },
  {
    id: 2,
    title: "The Last Symphony",
    subtitle: "Music that Transcends Time",
    description: "When a mysterious violin holds the key to unlocking a century-old secret, music becomes magic.",
    genre: "Historical Fiction",
    status: "New Release",
    year: "2024"
  },
  {
    id: 3,
    title: "Echoes of Tomorrow",
    subtitle: "A Journey Through Time",
    description: "In a world where past and future collide, one woman must choose between love and destiny.",
    genre: "Fantasy",
    status: "Coming Soon",
    year: "2024"
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <Card 
              key={book.id} 
              className="group hover:shadow-book transition-all duration-300 hover:-translate-y-2 bg-background border-accent/20 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
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
                
                <div className="flex justify-between items-center">
                  <Badge variant="outline" className="text-literary-navy border-literary-navy">
                    {book.genre}
                  </Badge>
                  <Button variant="ghost" className="text-accent hover:text-accent/80">
                    Learn More →
                  </Button>
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
    </section>
  );
};

export default FeaturedBooks;