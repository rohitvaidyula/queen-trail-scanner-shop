
import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Calendar, ArrowLeft, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const RSVP = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Get event data from navigation state or provide defaults
  const eventData = location.state?.event || {
    id: 1,
    title: "Avant-Garde Futures",
    date: "March 15, 2024",
    location: "Milan Fashion District",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500"
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    interestLevel: "",
    notes: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email) {
      toast({
        title: "Required fields missing",
        description: "Please fill in your name and email address.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsLoading(false);
    
    toast({
      title: "RSVP Submitted!",
      description: "We'll be in touch soon with exclusive updates.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-8 px-6 bg-creamy-sand-50">
        <div className="max-w-2xl mx-auto">
          <Link to="/events" className="inline-flex items-center gap-2 text-rose-gold-600 hover:text-rose-gold-700 mb-8">
            <ArrowLeft size={20} />
            Back to Events
          </Link>
          
          <Card className="bg-cream-100 border-rose-gold-200">
            <CardContent className="p-8 text-center">
              <CheckCircle className="w-16 h-16 text-rose-gold-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-charcoal-800 mb-4">
                Thank You!
              </h2>
              <p className="text-lg text-charcoal-600 mb-6">
                Thanks for RSVPing to <strong>{eventData.title}</strong>!
              </p>
              <p className="text-charcoal-600 mb-8">
                We'll be in touch soon with exclusive updates and event details.
              </p>
              <Button 
                onClick={() => navigate("/events")}
                className="bg-rose-gold-500 hover:bg-rose-gold-600 text-cream-50"
              >
                View More Events
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-8 px-6 bg-creamy-sand-50">
      <div className="max-w-2xl mx-auto">
        {/* Back Button */}
        <Link to="/events" className="inline-flex items-center gap-2 text-rose-gold-600 hover:text-rose-gold-700 mb-8">
          <ArrowLeft size={20} />
          Back to Events
        </Link>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal-800 mb-4">
            RSVP for Event
          </h1>
          <p className="text-charcoal-600 text-lg">
            Secure your place at this exclusive fashion experience
          </p>
        </div>

        {/* Event Summary Card */}
        <Card className="bg-cream-100 border-rose-gold-200 mb-8">
          <CardContent className="p-6">
            <div className="md:flex gap-6">
              <div className="md:w-1/3 mb-4 md:mb-0">
                <div 
                  className="h-32 md:h-full bg-cover bg-center rounded-lg"
                  style={{ backgroundImage: `url(${eventData.image})` }}
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-charcoal-800 mb-3">
                  {eventData.title}
                </h3>
                <div className="flex items-center gap-4 text-charcoal-600">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span className="text-sm">{eventData.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span className="text-sm">{eventData.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* RSVP Form */}
        <Card className="bg-cream-100 border-rose-gold-200">
          <CardHeader>
            <h2 className="text-2xl font-semibold text-charcoal-800">
              Complete Your RSVP
            </h2>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <Label htmlFor="fullName" className="text-charcoal-700 font-medium">
                  Full Name *
                </Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  className="mt-2 border-rose-gold-300 focus:border-rose-gold-500 focus:ring-rose-gold-500"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-charcoal-700 font-medium">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="mt-2 border-rose-gold-300 focus:border-rose-gold-500 focus:ring-rose-gold-500"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <Label htmlFor="phone" className="text-charcoal-700 font-medium">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="mt-2 border-rose-gold-300 focus:border-rose-gold-500 focus:ring-rose-gold-500"
                />
              </div>

              {/* City */}
              <div>
                <Label htmlFor="city" className="text-charcoal-700 font-medium">
                  City
                </Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  className="mt-2 border-rose-gold-300 focus:border-rose-gold-500 focus:ring-rose-gold-500"
                />
              </div>

              {/* Interest Level */}
              <div>
                <Label className="text-charcoal-700 font-medium">
                  Interest Level
                </Label>
                <Select value={formData.interestLevel} onValueChange={(value) => handleInputChange("interestLevel", value)}>
                  <SelectTrigger className="mt-2 border-rose-gold-300 focus:border-rose-gold-500 focus:ring-rose-gold-500">
                    <SelectValue placeholder="Select your interest level" />
                  </SelectTrigger>
                  <SelectContent className="bg-cream-100 border-rose-gold-200">
                    <SelectItem value="browsing">Just browsing</SelectItem>
                    <SelectItem value="attending">Definitely attending</SelectItem>
                    <SelectItem value="bringing-friends">Bringing friends</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Notes */}
              <div>
                <Label htmlFor="notes" className="text-charcoal-700 font-medium">
                  Additional Notes
                </Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => handleInputChange("notes", e.target.value)}
                  className="mt-2 border-rose-gold-300 focus:border-rose-gold-500 focus:ring-rose-gold-500"
                  rows={4}
                  placeholder="Any special requirements or questions..."
                />
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-rose-gold-500 hover:bg-rose-gold-600 text-cream-50 font-semibold py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
              >
                {isLoading ? "Submitting..." : "Submit RSVP"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RSVP;
