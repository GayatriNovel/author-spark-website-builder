import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, BookOpen } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-warm-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'd love to hear from readers, fellow writers, or anyone who shares a passion for storytelling
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Options */}
          <div className="space-y-6 animate-scale-in">
            <Card className="bg-background shadow-book hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">Email Me</h3>
                <p className="text-muted-foreground mb-4">For general inquiries and collaborations</p>
                <Button variant="outline" className="w-full">
                  sarah@sarahmitchell.com
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-background shadow-book hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6 text-center">
                <MessageSquare className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">Social Media</h3>
                <p className="text-muted-foreground mb-4">Follow my writing journey</p>
                <Button variant="outline" className="w-full">
                  @SarahMitchellAuthor
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-background shadow-book hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6 text-center">
                <BookOpen className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">Book Clubs</h3>
                <p className="text-muted-foreground mb-4">Interested in a virtual visit?</p>
                <Button variant="outline" className="w-full">
                  Schedule a Visit
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in">
            <Card className="bg-background shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-primary mb-2 block">Name</label>
                    <Input placeholder="Your full name" className="border-accent/30 focus:border-accent" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-primary mb-2 block">Email</label>
                    <Input type="email" placeholder="your.email@example.com" className="border-accent/30 focus:border-accent" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-primary mb-2 block">Subject</label>
                  <Input placeholder="What would you like to discuss?" className="border-accent/30 focus:border-accent" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-primary mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Tell me about yourself, your thoughts on my books, or anything you'd like to share..."
                    className="min-h-[120px] border-accent/30 focus:border-accent"
                  />
                </div>
                
                <Button variant="literary" size="lg" className="w-full">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;