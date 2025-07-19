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
                Her debut novel, The Wildflower of Assam, is a deeply moving historical romance set in 1980s Assam—a story of 
                forbidden love, loss, and longing at the edge of political unrest.
              </p>
              <p>
                When she's not writing, Gayatri can be found buried in books, journaling at sunrise, or brewing the perfect cup of chai. 
                She currently lives in Australia with her family, where she continues to craft stories that capture the fragility 
                of belonging and the resilience of hope.
              </p>
            </div>
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
                <div className="text-3xl font-bold mb-2">1980s</div>
                <div className="text-sm font-medium">Assam Setting</div>
              </CardContent>
            </Card>
            
            <Card className="bg-primary text-primary-foreground shadow-book">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold mb-2">Historical</div>
                <div className="text-sm font-medium">Romance</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;