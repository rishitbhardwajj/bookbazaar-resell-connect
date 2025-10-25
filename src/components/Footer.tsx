import { BookOpen, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-8 w-8" />
              <span className="text-2xl font-bold">Book Bazaar</span>
            </div>
            <p className="text-sm opacity-90">
              Your trusted platform for buying and selling old books. Promoting affordable reading for everyone.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/buy" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Buy Books
                </Link>
              </li>
              <li>
                <Link to="/sell" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Sell Books
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Categories</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>School Books</li>
              <li>College Books</li>
              <li>Fiction</li>
              <li>Non-Fiction</li>
              <li>Competitive Exams</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm opacity-90">
                <Mail className="h-4 w-4" />
                <span>info@bookbazaar.com</span>
              </li>
              <li className="flex items-center gap-2 text-sm opacity-90">
                <Phone className="h-4 w-4" />
                <span>+91 1234567890</span>
              </li>
              <li className="flex items-center gap-2 text-sm opacity-90">
                <MapPin className="h-4 w-4" />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-90">
          <p>&copy; {new Date().getFullYear()} Book Bazaar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
