
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const Events = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);

  const upcomingEvents = [
    {
      id: 1,
      title: "Avant-Garde Futures",
      date: "March 15, 2024",
      location: "Milan Fashion District",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500",
      description: "A revolutionary showcase featuring sustainable fashion and digital wearables from emerging designers across Europe.",
      theme: "Sustainable Innovation",
      designers: [
        { name: "Elena Marchetti", bio: "Sustainable fashion pioneer specializing in bio-materials" },
        { name: "Lucas Chen", bio: "Digital fashion designer creating virtual luxury pieces" }
      ],
      artists: [
        { name: "Sofia Rodriguez", bio: "Installation artist exploring fashion and technology" }
      ]
    },
    {
      id: 2,
      title: "Metropolitan Elegance",
      date: "April 22, 2024",
      location: "New York Design Center",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500",
      description: "An exclusive evening celebrating contemporary luxury with established and emerging fashion houses.",
      theme: "Urban Sophistication",
      designers: [
        { name: "Marcus Williams", bio: "Contemporary menswear designer with Savile Row training" },
        { name: "Aria Nakamura", bio: "Luxury accessories designer known for innovative leather work" }
      ],
      artists: [
        { name: "David Park", bio: "Fashion photographer and visual storyteller" }
      ]
    }
  ];

  const pastEvents = [
    {
      id: 3,
      title: "Artisan Revival",
      date: "January 28, 2024",
      location: "London Creative Quarter",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=500",
      description: "A celebration of traditional craftsmanship meeting modern design aesthetics.",
      theme: "Heritage & Innovation",
      designers: [
        { name: "Isabella Romano", bio: "Italian couturier specializing in hand-embroidered pieces" }
      ],
      artists: [
        { name: "James Morrison", bio: "Textile artist creating contemporary tapestries" }
      ]
    }
  ];

  const currentEvents = activeTab === "upcoming" ? upcomingEvents : pastEvents;

  const toggleEventExpansion = (eventId: number) => {
    setExpandedEvent(expandedEvent === eventId ? null : eventId);
  };

  const handleGetTickets = (event: any) => {
    navigate("/rsvp", { state: { event } });
  };

  return (
    <div className="min-h-screen pt-8 px-6 bg-creamy-sand-50">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-charcoal-800 mb-4">
          Fashion Events
        </h1>
        <p className="text-charcoal-600 text-lg max-w-2xl mx-auto">
          Discover exclusive runway shows, designer showcases, and luxury fashion experiences.
        </p>
      </div>

      {/* Toggle Buttons */}
      <div className="flex justify-center mb-8">
        <div className="bg-cream-200 rounded-full p-1 flex">
          <Button
            variant={activeTab === "upcoming" ? "default" : "ghost"}
            className={cn(
              "rounded-full px-6 py-2 transition-all duration-300",
              activeTab === "upcoming" 
                ? "bg-rose-gold-500 text-cream-50 hover:bg-rose-gold-600" 
                : "text-charcoal-600 hover:text-rose-gold-500"
            )}
            onClick={() => setActiveTab("upcoming")}
          >
            Upcoming
          </Button>
          <Button
            variant={activeTab === "past" ? "default" : "ghost"}
            className={cn(
              "rounded-full px-6 py-2 transition-all duration-300",
              activeTab === "past" 
                ? "bg-rose-gold-500 text-cream-50 hover:bg-rose-gold-600" 
                : "text-charcoal-600 hover:text-rose-gold-500"
            )}
            onClick={() => setActiveTab("past")}
          >
            Past
          </Button>
        </div>
      </div>

      {/* Events List */}
      <div className="max-w-4xl mx-auto space-y-6">
        {currentEvents.map((event, index) => (
          <Card 
            key={event.id} 
            className="bg-cream-100 border-rose-gold-200 hover:border-rose-gold-300 transition-all duration-300 animate-slide-up overflow-hidden"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="md:flex">
              <div className="md:w-1/3">
                <div 
                  className="h-48 md:h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${event.image})` }}
                />
              </div>
              <div className="md:w-2/3 p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-charcoal-800 mb-2">
                      {event.title}
                    </h3>
                    <Badge className="bg-rose-gold-200 text-rose-gold-800 border-rose-gold-300 mb-2">
                      {event.theme}
                    </Badge>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleEventExpansion(event.id)}
                    className="text-rose-gold-500 hover:text-rose-gold-600"
                  >
                    {expandedEvent === event.id ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </div>

                <div className="flex items-center gap-4 text-charcoal-600 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span className="text-sm">{event.location}</span>
                    <ExternalLink size={14} className="text-rose-gold-500 cursor-pointer hover:text-rose-gold-600" />
                  </div>
                </div>

                <p className="text-charcoal-600 mb-4">
                  {event.description}
                </p>

                {/* Expanded Content */}
                {expandedEvent === event.id && (
                  <div className="space-y-4 animate-fade-in">
                    <div>
                      <h4 className="text-lg font-semibold text-rose-gold-600 mb-2">Featured Designers</h4>
                      <div className="grid gap-2">
                        {event.designers.map((designer, idx) => (
                          <div key={idx} className="p-3 bg-cream-200 rounded-lg border border-rose-gold-200">
                            <p className="font-medium text-charcoal-800">{designer.name}</p>
                            <p className="text-sm text-charcoal-600">{designer.bio}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-rose-gold-600 mb-2">Featured Artists</h4>
                      <div className="grid gap-2">
                        {event.artists.map((artist, idx) => (
                          <div key={idx} className="p-3 bg-cream-200 rounded-lg border border-rose-gold-200">
                            <p className="font-medium text-charcoal-800">{artist.name}</p>
                            <p className="text-sm text-charcoal-600">{artist.bio}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "upcoming" && (
                  <Button 
                    onClick={() => handleGetTickets(event)}
                    className="bg-rose-gold-500 hover:bg-rose-gold-600 text-cream-50 mt-4"
                  >
                    Get Tickets
                  </Button>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Events;
