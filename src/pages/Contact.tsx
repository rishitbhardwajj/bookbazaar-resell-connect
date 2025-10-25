import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "info@bookbazaar.com",
      link: "mailto:info@bookbazaar.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 1234567890",
      link: "tel:+911234567890",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "India",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Get in Touch</h1>
          <p className="text-xl text-muted-foreground">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-card rounded-lg border border-border p-6 text-center shadow-[var(--shadow-book)]"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                <info.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{info.title}</h3>
              {info.link ? (
                <a
                  href={info.link}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {info.content}
                </a>
              ) : (
                <p className="text-muted-foreground">{info.content}</p>
              )}
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-lg border border-border p-8 shadow-[var(--shadow-book)]">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="your@email.com" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject *</Label>
                <Input id="subject" placeholder="What's this about?" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us how we can help..."
                  rows={6}
                  required
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        <div className="max-w-2xl mx-auto mt-12 bg-muted rounded-lg p-6 text-center">
          <h3 className="font-semibold mb-2 text-foreground">Quick Response</h3>
          <p className="text-sm text-muted-foreground">
            We typically respond within 24 hours during business days. For urgent matters, please call us directly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
