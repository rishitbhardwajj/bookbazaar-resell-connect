import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, BookOpen, TrendingUp, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import BookCard from "@/components/BookCard";
import heroImage from "@/assets/hero-books.jpg";
import midnightGarden from "@/assets/book-midnight-garden.jpg";
import advancedPhysics from "@/assets/book-advanced-physics.jpg";
import storiesKids from "@/assets/book-stories-kids.jpg";
import dataStructures from "@/assets/book-data-structures.jpg";

const Home = () => {
  const categories = [
    { name: "School Books", icon: BookOpen },
    { name: "College Books", icon: BookOpen },
    { name: "Fiction", icon: BookOpen },
    { name: "Non-Fiction", icon: BookOpen },
    { name: "Competitive Exams", icon: BookOpen },
    { name: "Children's Books", icon: BookOpen },
  ];

  const featuredBooks = [
    {
      id: "1",
      title: "The Midnight Garden",
      author: "Harper Lee",
      price: 250,
      condition: "Good" as const,
      location: "Mumbai",
      image: midnightGarden,
      category: "Fiction",
    },
    {
      id: "2",
      title: "Advanced Physics",
      author: "B.S. Grewal",
      price: 450,
      condition: "Used" as const,
      location: "Delhi",
      image: advancedPhysics,
      category: "College Books",
    },
    {
      id: "3",
      title: "Stories for Kids",
      author: "NCERT",
      price: 150,
      condition: "Good" as const,
      location: "Bangalore",
      image: storiesKids,
      category: "School Books",
    },
    {
      id: "4",
      title: "Data Structures",
      author: "F. Scott Fitzgerald",
      price: 200,
      condition: "New" as const,
      location: "Pune",
      image: dataStructures,
      category: "Fiction",
    },
  ];

  const features = [
    {
      icon: TrendingUp,
      title: "Best Prices",
      description: "Get the best deals on old books",
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Your transactions are protected",
    },
    {
      icon: Users,
      title: "Trusted Community",
      description: "Join thousands of book lovers",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Buy and Sell Old Books Easily
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Your trusted platform for affordable reading. Find rare books or give your old books a new home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search for books, authors, or categories..."
                className="pl-10 h-12 bg-card"
              />
            </div>
            <Button size="lg" className="h-12 bg-secondary hover:bg-secondary/90">
              Search Books
            </Button>
          </div>
          <Link to="/sell">
            <Button size="lg" variant="outline" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Sell Your Books
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Link
                key={index}
                to="/buy"
                className="flex flex-col items-center justify-center p-6 bg-card rounded-lg border border-border hover:shadow-[var(--shadow-book)] transition-shadow"
              >
                <category.icon className="h-12 w-12 text-primary mb-3" />
                <span className="text-sm font-medium text-center text-foreground">{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-foreground">Featured Books</h2>
            <Link to="/buy">
              <Button variant="outline">View All</Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBooks.map((book) => (
              <BookCard key={book.id} {...book} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h2 className="text-4xl font-bold mb-6">Ready to Start?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of book lovers today. Buy affordable books or earn by selling your old collection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/buy">
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Browse Books
              </Button>
            </Link>
            <Link to="/sell">
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                List Your Books
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
