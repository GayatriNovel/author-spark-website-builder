import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, BookOpen } from "lucide-react";
import { useRef } from "react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = nameRef.current?.value.trim() || "";
    const email = emailRef.current?.value.trim() || "";
    const subject = subjectRef.current?.value.trim() || "";
    const message = messageRef.current?.value.trim() || "";

    if (!name || !email || !message) {
      toast({
        title: "Missing required fields",
        description: "Please fill in your name, email, and message.",
      });
      return;
    }

    const mailto = `mailto:gayatrinsarkar@gmail.com?subject=${encodeURIComponent(subject || "Website inquiry")}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailto;

    toast({
      title: "Opening your email app",
      description: "Review and send your message from your email client.",
    });
  };

  return (
    <section id="contact" className="py-20 bg-warm-cream scroll-mt-24">
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
                <Button variant="outline" className="w-full" asChild>
                  <a href="mailto:gayatrinsarkar@gmail.com">gayatrinsarkar@gmail.com</a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-background shadow-book hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6 text-center">
                <MessageSquare className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">Social Media</h3>
                <p className="text-muted-foreground mb-4">Follow my writing journey</p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://www.instagram.com/__peepingout_/" target="_blank" rel="noreferrer">
                    Instagram:__peepingout_
                  </a>
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
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-primary mb-2 block">Name</label>
                      <Input ref={nameRef} required placeholder="Your full name" className="border-accent/30 focus:border-accent" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-primary mb-2 block">Email</label>
                      <Input ref={emailRef} required type="email" placeholder="your.email@example.com" className="border-accent/30 focus:border-accent" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-primary mb-2 block">Subject</label>
                    <Input ref={subjectRef} placeholder="What would you like to discuss?" className="border-accent/30 focus:border-accent" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-primary mb-2 block">Message</label>
                    <Textarea 
                      ref={messageRef}
                      required
                      placeholder="Tell me about yourself, your thoughts on my books, or anything you'd like to share..."
                      className="min-h-[120px] border-accent/30 focus:border-accent"
                    />
                  </div>
                  
                  <Button variant="literary" size="lg" className="w-full" type="submit">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

