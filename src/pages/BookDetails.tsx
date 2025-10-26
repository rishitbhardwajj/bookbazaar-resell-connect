import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mail, Phone, Share2 } from "lucide-react";
import { useParams } from "react-router-dom";
import { toast } f

const BookDetails = () => {
  const { id } = useParams();

  // Mock data - in a real app, this would be fetched based on the id
  const book = {
    id: id,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 250,
    condition: "Good",
    location: "Mumbai, Maharashtra",
    category: "Fiction",
    description: "Classic American novel in good condition. Pages are clean with minimal wear. A timeless story of racial injustice and childhood innocence. Perfect for literature enthusiasts and students.",
    isbn: "978-0-06-112008-4",
    edition: "First Edition",
    language: "English",
    pages: 324,
    
    seller: {
      name: "Rahul Sharma",
      email: "rahul@example.com",
      phone: "+91 9876543210",
      memberSince: "2023",
    },
  };

  const handleContact = () => {
    toast.success("Contact details copied to clipboard!");
  };

  const handleShare = () => {
    toast.success("Link copied to clipboard!");
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
