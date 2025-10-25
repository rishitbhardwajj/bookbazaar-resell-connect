import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  price: number;
  condition: "New" | "Good" | "Used";
  location: string;
  image: string;
  category: string;
}

const BookCard = ({ id, title, author, price, condition, location, image, category }: BookCardProps) => {
  const conditionColors = {
    New: "bg-secondary text-secondary-foreground",
    Good: "bg-accent text-accent-foreground",
    Used: "bg-muted text-muted-foreground",
  };

  return (
    <Card className="group overflow-hidden hover:shadow-[var(--shadow-hover)] transition-shadow duration-300">
      <div className="aspect-[3/4] overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-4">
        <Badge variant="outline" className="mb-2">{category}</Badge>
        <h3 className="font-semibold text-lg mb-1 line-clamp-2 text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground mb-2">by {author}</p>
        <div className="flex items-center justify-between mb-2">
          <span className="text-2xl font-bold text-primary">₹{price}</span>
          <Badge className={conditionColors[condition]}>{condition}</Badge>
        </div>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link to={`/book/${id}`} className="w-full">
          <Button className="w-full">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BookCard;
