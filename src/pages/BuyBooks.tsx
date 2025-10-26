import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, SlidersHorizontal } from "lucide-react";
import BookCard from "@/components/BookCard";
import { Button } from "@/components/ui/button";
import midnightGarden from "@/assets/book-midnight-garden.jpg";
import advancedPhysics from "@/assets/book-advanced-physics.jpg";
import storiesKids from "@/assets/book-stories-kids.jpg";
import dataStructures from "@/assets/book-data-structures.jpg";
import artOfWar from "@/assets/book-art-of-war.jpg";
import organicChemistry from "@/assets/book-organic-chemistry.jpg";

const BuyBooks = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCondition, setSelectedCondition] = useState("all");
  const [priceSort, setPriceSort] = useState("default");

  const books = [
    {
      id: "1",
      title: "Midnight in the Garden of Memory",
      author: "Sarah Mitchell",
      price: 250,
      condition: "Good" as const,
      location: "Mumbai",
      image: midnightGarden,
      category: "Fiction",
    },
    {
      id: "2",
      title: "Concepts of Physics Vol. 1",
      author: "H.C. Verma",
      price: 450,
      condition: "Used" as const,
      location: "Delhi",
      image: advancedPhysics,
      category: "College Books",
    },
    {
      id: "3",
      title: "Fairy Tales and Short Stories",
      author: "Various Authors",
      price: 150,
      condition: "Good" as const,
      location: "Bangalore",
      image: storiesKids,
      category: "School Books",
    },
    {
      id: "4",
      title: "Data Structures and Algorithms",
      author: "Narasimha Karumanchi",
      price: 200,
      condition: "New" as const,
      location: "Pune",
      image: dataStructures,
      category: "College Books",
    },
    {
      id: "5",
      title: "Organic Chemistry",
      author: "Morrison & Boyd",
      price: 550,
      condition: "Good" as const,
      location: "Chennai",
      image: organicChemistry,
      category: "College Books",
    },
    {
      id: "6",
      title: "The Art of War",
      author: "Sun Tzu",
      price: 280,
      condition: "New" as const,
      location: "Kolkata",
      image: artOfWar,
      category: "Fiction",
    },
    {
      id: "7",
      title: "Physics Textbook Class 12",
      author: "NCERT",
      price: 120,
      condition: "Used" as const,
      location: "Hyderabad",
      image: advancedPhysics,
      category: "School Books",
    },
    {
      id: "8",
      title: "The Secret Garden",
      author: "Frances Hodgson Burnett",
      price: 180,
      condition: "Good" as const,
      location: "Ahmedabad",
      image: midnightGarden,
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
