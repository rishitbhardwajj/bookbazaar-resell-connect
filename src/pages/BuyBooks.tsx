import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, SlidersHorizontal } from "lucide-react";
import BookCard from "@/components/BookCard";
import { Button } from "@/components/ui/button";

const BuyBooks = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCondition, setSelectedCondition] = useState("all");
  const [priceSort, setPriceSort] = useState("default");

  const books = [
    {
      id: "1",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: 250,
      condition: "Good" as const,
      location: "Mumbai",
      image: "/placeholder.svg",
      category: "Fiction",
    },
    {
      id: "2",
      title: "Engineering Mathematics",
      author: "B.S. Grewal",
      price: 450,
      condition: "Used" as const,
      location: "Delhi",
      image: "/placeholder.svg",
      category: "College Books",
    },
    {
      id: "3",
      title: "NCERT Physics Class 12",
      author: "NCERT",
      price: 150,
      condition: "Good" as const,
      location: "Bangalore",
      image: "/placeholder.svg",
      category: "School Books",
    },
    {
      id: "4",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      price: 200,
      condition: "New" as const,
      location: "Pune",
      image: "/placeholder.svg",
      category: "Fiction",
    },
    {
      id: "5",
      title: "Organic Chemistry",
      author: "Morrison Boyd",
      price: 550,
      condition: "Good" as const,
      location: "Chennai",
      image: "/placeholder.svg",
      category: "College Books",
    },
    {
      id: "6",
      title: "1984",
      author: "George Orwell",
      price: 280,
      condition: "New" as const,
      location: "Kolkata",
      image: "/placeholder.svg",
      category: "Fiction",
    },
    {
      id: "7",
      title: "NCERT Mathematics Class 10",
      author: "NCERT",
      price: 120,
      condition: "Used" as const,
      location: "Hyderabad",
      image: "/placeholder.svg",
      category: "School Books",
    },
    {
      id: "8",
      title: "The Alchemist",
      author: "Paulo Coelho",
      price: 180,
      condition: "Good" as const,
      location: "Ahmedabad",
      image: "/placeholder.svg",
      category: "Fiction",
    },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Buy Books</h1>

        {/* Search and Filters */}
        <div className="bg-card rounded-lg border border-border p-6 mb-8 shadow-[var(--shadow-book)]">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search by title, author, or ISBN..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button className="md:w-auto">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="fiction">Fiction</SelectItem>
                <SelectItem value="school">School Books</SelectItem>
                <SelectItem value="college">College Books</SelectItem>
                <SelectItem value="competitive">Competitive Exams</SelectItem>
                <SelectItem value="nonfiction">Non-Fiction</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedCondition} onValueChange={setSelectedCondition}>
              <SelectTrigger>
                <SelectValue placeholder="Condition" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Conditions</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="good">Good</SelectItem>
                <SelectItem value="used">Used</SelectItem>
              </SelectContent>
            </Select>

            <Select value={priceSort} onValueChange={setPriceSort}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="low-high">Price: Low to High</SelectItem>
                <SelectItem value="high-low">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" className="w-full md:w-auto">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{books.length}</span> books
          </p>
        </div>

        {/* Book Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuyBooks;
