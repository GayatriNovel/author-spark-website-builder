import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              About Sarah
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Sarah Mitchell is a bestselling author whose passion for storytelling began in the quiet corners 
                of her grandmother's library. With over a decade of writing experience, she has touched the hearts 
                of readers worldwide with her emotionally rich narratives.
              </p>
              <p>
                Her work explores themes of love, loss, resilience, and the beautiful complexity of human relationships. 
                Sarah believes that every story has the power to heal, inspire, and connect us to our shared humanity.
              </p>
              <p>
                When she's not writing, Sarah enjoys long walks in nature, playing piano, and spending time with 
                her rescue dog, Hemingway. She currently resides in a cozy cottage by the sea, where the sound 
                of waves provides the perfect backdrop for her creative process.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 animate-scale-in">
            <Card className="bg-gradient-accent text-white shadow-elegant">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold mb-2">12+</div>
                <div className="text-sm font-medium">Published Books</div>
              </CardContent>
            </Card>
            
            <Card className="bg-literary-navy text-white shadow-book">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold mb-2">500K+</div>
                <div className="text-sm font-medium">Readers Worldwide</div>
              </CardContent>
            </Card>
            
            <Card className="bg-accent text-white shadow-elegant">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold mb-2">5</div>
                <div className="text-sm font-medium">Literary Awards</div>
              </CardContent>
            </Card>
            
            <Card className="bg-primary text-primary-foreground shadow-book">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold mb-2">15</div>
                <div className="text-sm font-medium">Years Writing</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;