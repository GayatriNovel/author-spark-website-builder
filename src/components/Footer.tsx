const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
              Gayatri Sarkar
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Passionate storyteller exploring the complexities of human relationships, memory, and identity. 
              Thank you for being part of this incredible journey.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#books" className="hover:text-accent transition-colors">Books</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
              <li><a href="#events" className="hover:text-accent transition-colors">Events</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="https://www.instagram.com/__peepingout_?igsh=MXV0MTN4NGdvdWl5NQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Goodreads</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 Gayatri Sarkar. All rights reserved. | Website designed with love for storytelling.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;