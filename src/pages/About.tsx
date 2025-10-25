import { BookOpen, Target, Users, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: BookOpen,
      title: "Promoting Reading",
      description: "We believe in making books accessible to everyone, regardless of their economic background.",
    },
    {
      icon: Target,
      title: "Sustainability",
      description: "By encouraging book reuse, we contribute to environmental conservation and reduce waste.",
    },
    {
      icon: Users,
      title: "Community Building",
      description: "We connect book lovers across India, creating a vibrant community of readers and sellers.",
    },
    {
      icon: Heart,
      title: "Passion for Books",
      description: "Our platform is built by book lovers, for book lovers, with genuine care for literature.",
    },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About Book Bazaar
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Your trusted platform for buying and selling old books. We're on a mission to make reading
            affordable and accessible to everyone while promoting sustainability.
          </p>
        </div>

        {/* Our Story */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-card rounded-lg border border-border p-8 shadow-[var(--shadow-book)]">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Book Bazaar was founded with a simple yet powerful idea: books should be accessible to
                everyone. We noticed that many students and book lovers struggled to afford new books,
                while others had valuable books collecting dust on their shelves.
              </p>
              <p>
                Our platform bridges this gap, creating a marketplace where old books find new homes and
                readers find affordable treasures. Whether you're a student looking for textbooks, a
                literature enthusiast hunting for classics, or someone wanting to declutter their bookshelf,
                Book Bazaar is here for you.
              </p>
              <p>
                Since our launch, we've helped thousands of books find new readers and enabled countless
                students to access educational materials at affordable prices. We're proud to be part of
                the reading community and contribute to both education and sustainability.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-primary to-secondary rounded-lg p-12 text-primary-foreground">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            To create the largest and most trusted community of book lovers in India, where everyone can
            buy, sell, and discover affordable books while promoting sustainable reading habits.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
