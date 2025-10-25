import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload } from "lucide-react";
import { toast } from "sonner";

const SellBooks = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Book listing submitted successfully!");
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-foreground">Sell Your Books</h1>
          <p className="text-muted-foreground">
            List your books and reach thousands of potential buyers
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card rounded-lg border border-border p-8 shadow-[var(--shadow-book)]">
          <div className="space-y-6">
            {/* Book Details */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Book Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Book Title *</Label>
                  <Input id="title" placeholder="Enter book title" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="author">Author *</Label>
                  <Input id="author" placeholder="Enter author name" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Select required>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fiction">Fiction</SelectItem>
                      <SelectItem value="school">School Books</SelectItem>
                      <SelectItem value="college">College Books</SelectItem>
                      <SelectItem value="competitive">Competitive Exams</SelectItem>
                      <SelectItem value="nonfiction">Non-Fiction</SelectItem>
                      <SelectItem value="children">Children's Books</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="condition">Condition *</Label>
                  <Select required>
                    <SelectTrigger id="condition">
                      <SelectValue placeholder="Select condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="good">Good</SelectItem>
                      <SelectItem value="used">Used</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="price">Expected Price (₹) *</Label>
                  <Input id="price" type="number" placeholder="Enter price" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="isbn">ISBN (Optional)</Label>
                  <Input id="isbn" placeholder="Enter ISBN" />
                </div>
              </div>

              <div className="space-y-2 mt-6">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe the book's condition, any markings, edition, etc."
                  rows={4}
                />
              </div>
            </div>

            {/* Book Images */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Book Images</h2>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-sm text-muted-foreground mb-2">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-muted-foreground">
                  PNG, JPG up to 5MB (Max 4 images)
                </p>
                <input type="file" className="hidden" accept="image/*" multiple />
              </div>
            </div>

            {/* Seller Information */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Your Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name *</Label>
                  <Input id="name" placeholder="Enter your name" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="Enter your email" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" type="tel" placeholder="Enter phone number" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city">City *</Label>
                  <Input id="city" placeholder="Enter your city" required />
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button type="submit" className="flex-1">
                Submit Listing
              </Button>
              <Button type="button" variant="outline" className="flex-1">
                Preview
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellBooks;
