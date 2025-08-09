import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              About Gayatri
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Gayatri is a passionate storyteller drawn to the complexities of human relationships, memory, and identity. 
                Her writing explores the quiet power of everyday moments, often set against rich cultural backdrops that 
                reflect her deep love for history, place, and emotion.
              </p>
              <p>
                Born and raised in India, Gayatri brings a nuanced voice shaped by lived experience, empathy, and an observant eye. 
                Her debut novel, The Wildflower of Assam, is a deeply moving Historical and Women's fiction set in 1980s Assam—a story of 
                forbidden love, loss, and longing at the edge of political unrest.
              </p>
              <p>
                When she's not writing, Gayatri can be found buried in books, or brewing the perfect cup of chai. 
                She currently lives in Australia with her family, where she continues to craft stories that capture the fragility 
                of belonging and the resilience of hope.
              </p>
            </div>

            <figure className="mt-8">
              <img
                src="/lovable-uploads/28bfa1a0-9167-44ca-8be0-c0a4407d2d6a.png"
                alt="Oxford graduation ceremony — Diploma in Creative Writing at the University of Oxford"
                loading="lazy"
                className="w-full rounded-lg shadow-elegant"
              />
              <figcaption className="mt-3 text-sm text-muted-foreground">
                Glimpse from my Oxford graduation
              </figcaption>
            </figure>
          </div>
          
          <div className="grid grid-cols-2 gap-6 animate-scale-in">
            <Card className="bg-gradient-accent text-white shadow-elegant">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold mb-2">1</div>
                <div className="text-sm font-medium">Debut Novel</div>
              </CardContent>
            </Card>
            
            <Card className="bg-literary-navy text-white shadow-book">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold mb-2">Global</div>
                <div className="text-sm font-medium">Availability</div>
              </CardContent>
            </Card>
            
            <Card className="bg-accent text-white shadow-elegant">
              <CardContent className="p-6 text-center">
                 <div className="text-3xl font-bold mb-2">Theme</div>
                <div className="text-2xl font-bold mb-2">Political Unrest & Illegal Immigration</div>
              </CardContent>
            </Card>
            
            <Card className="bg-primary text-primary-foreground shadow-book">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold mb-2">Genre</div>
                <div className="text-2xl font-bold mb-2">Historical & Women's Fiction</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
