import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mail, Phone, Share2 } from "lucide-react";
import { useParams } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const BookDetails = () => {
  const { id } = useParams();

  // Mock data - in a real app, this would be fetched from a database based on the id
  const booksData: Record<string, any> = {
    "1": {
      title: "Midnight in the Garden of Memory",
      author: "Sarah Mitchell",
      price: 250,
      condition: "Good",
      location: "Mumbai, Maharashtra",
      category: "Fiction",
      description: "A captivating fiction novel in good condition. Pages are clean with minimal wear. An enchanting story that takes readers on a journey through memory and imagination.",
      isbn: "978-0-14-123456-7",
      edition: "First Edition",
      language: "English",
      pages: 342,
    },
    "2": {
      title: "Concepts of Physics Vol. 1",
      author: "H.C. Verma",
      price: 450,
      condition: "Used",
      location: "Delhi, Delhi",
      category: "College Books",
      description: "Popular physics textbook for engineering students. Well-used but all pages intact. Contains comprehensive coverage of mechanics, waves, and thermodynamics. Great for JEE preparation.",
      isbn: "978-81-7709-187-8",
      edition: "Revised Edition",
      language: "English",
      pages: 464,
    },
    "3": {
      title: "Fairy Tales and Short Stories",
      author: "Various Authors",
      price: 150,
      condition: "Good",
      location: "Bangalore, Karnataka",
      category: "School Books",
      description: "Collection of classic fairy tales and stories for children. Good condition with colorful illustrations. Perfect for bedtime reading and improving reading skills.",
      isbn: "978-93-5072-234-1",
      edition: "School Edition",
      language: "English",
      pages: 180,
    },
    "4": {
      title: "Data Structures and Algorithms",
      author: "Narasimha Karumanchi",
      price: 200,
      condition: "New",
      location: "Pune, Maharashtra",
      category: "College Books",
      description: "Brand new book on data structures and algorithms. Comprehensive guide with problem-solving techniques. Excellent for computer science students and coding interviews.",
      isbn: "978-81-8404-835-5",
      edition: "Second Edition",
      language: "English",
      pages: 468,
    },
    "5": {
      title: "Organic Chemistry",
      author: "Morrison & Boyd",
      price: 550,
      condition: "Good",
      location: "Chennai, Tamil Nadu",
      category: "College Books",
      description: "Classic organic chemistry textbook in good condition. Comprehensive coverage of organic reactions and mechanisms. Essential for chemistry students and NEET preparation.",
      isbn: "978-81-203-0970-6",
      edition: "Sixth Edition",
      language: "English",
      pages: 1283,
    },
    "6": {
      title: "The Art of War",
      author: "Sun Tzu",
      price: 280,
      condition: "New",
      location: "Kolkata, West Bengal",
      category: "Fiction",
      description: "Brand new edition of the ancient Chinese military treatise. A timeless classic on strategy and tactics applicable to business and life. Clean pages with modern translation.",
      isbn: "978-0-14-044917-4",
      edition: "Penguin Classics",
      language: "English",
      pages: 273,
    },
    "7": {
      title: "Physics Textbook Class 12",
      author: "NCERT",
      price: 120,
      condition: "Used",
      location: "Hyderabad, Telangana",
      category: "School Books",
      description: "NCERT Physics textbook for Class 12. Used condition but all chapters complete. Essential for CBSE board exam preparation. Contains theory and practice questions.",
      isbn: "978-81-7450-826-8",
      edition: "2024 Edition",
      language: "English",
      pages: 312,
    },
    "8": {
      title: "The Secret Garden",
      author: "Frances Hodgson Burnett",
      price: 180,
      condition: "Good",
      location: "Ahmedabad, Gujarat",
      category: "Fiction",
      description: "A beloved children's classic in good condition. The story of a young girl who discovers a hidden garden and brings it back to life. Pages are clean with minimal wear. Perfect for young readers and collectors of classic literature.",
      isbn: "978-0-14-062466-4",
      edition: "Penguin Classics",
      language: "English",
      pages: 288,
    },
  };

  const bookData = booksData[id || "1"];
  
  const book = {
    id: id,
    ...bookData,
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    seller: {
      name: "Rahul Sharma",
      email: "rahul@example.com",
      phone: "+91 9876543210",
      memberSince: "2023",
    },
  };

  const handleContact = () => {
    toast({
      title: "Contact details copied to clipboard!",
    });
  };

  const handleShare = () => {
    toast({
      title: "Link copied to clipboard!",
    });
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-[3/4] overflow-hidden rounded-lg border border-border bg-muted">
              <img
                src={book.images[0]}
                alt={book.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {book.images.slice(1).map((image, index) => (
                <div key={index} className="aspect-square overflow-hidden rounded-lg border border-border bg-muted cursor-pointer hover:opacity-80 transition-opacity">
                  <img
                    src={image}
                    alt={`${book.title} ${index + 2}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-3">{book.category}</Badge>
              <h1 className="text-4xl font-bold mb-2 text-foreground">{book.title}</h1>
              <p className="text-xl text-muted-foreground mb-4">by {book.author}</p>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-bold text-primary">₹{book.price}</span>
                <Badge variant="secondary" className="text-lg px-4 py-1">
                  {book.condition}
                </Badge>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground mb-6">
                <MapPin className="h-5 w-5" />
                <span>{book.location}</span>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Description</h2>
              <p className="text-muted-foreground leading-relaxed">{book.description}</p>
            </div>

            <div className="border-t border-border pt-6">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Book Details</h2>
              <dl className="grid grid-cols-2 gap-4">
                <div>
                  <dt className="text-sm text-muted-foreground mb-1">ISBN</dt>
                  <dd className="font-medium text-foreground">{book.isbn}</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground mb-1">Edition</dt>
                  <dd className="font-medium text-foreground">{book.edition}</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground mb-1">Language</dt>
                  <dd className="font-medium text-foreground">{book.language}</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground mb-1">Pages</dt>
                  <dd className="font-medium text-foreground">{book.pages}</dd>
                </div>
              </dl>
            </div>

            <div className="border-t border-border pt-6">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Seller Information</h2>
              <div className="space-y-3">
                <p className="font-medium text-foreground">{book.seller.name}</p>
                <p className="text-sm text-muted-foreground">
                  Member since {book.seller.memberSince}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="flex-1" size="lg" onClick={handleContact}>
                <Mail className="h-5 w-5 mr-2" />
                Contact Seller
              </Button>
              <Button variant="outline" size="lg" onClick={handleShare}>
                <Share2 className="h-5 w-5 mr-2" />
                Share
              </Button>
            </div>

            <div className="bg-muted rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Safety Tip:</strong> Always meet in a public place and inspect the book before making payment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
