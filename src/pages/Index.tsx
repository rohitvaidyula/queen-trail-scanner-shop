
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Crown, Users, Target } from "lucide-react";

const Index = () => {
  const highlights = [
    {
      icon: Crown,
      title: "Past Shows",
      description: "Exclusive runway events featuring emerging designers and established fashion houses.",
    },
    {
      icon: Users,
      title: "Designer Collaborations",
      description: "Partnerships with visionary creators pushing the boundaries of contemporary fashion.",
    },
    {
      icon: Target,
      title: "Our Mission",
      description: "Elevating fashion through innovative experiences and community-driven events.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden luxury-gradient">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 px-6 py-20 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gold-text-gradient">
              Trailblazer Queen
            </h1>
            <p className="text-xl md:text-2xl text-cream-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Where fashion meets innovation. Discover exclusive events, emerging designers, 
              and the future of luxury fashion.
            </p>
            <Link to="/events">
              <Button 
                size="lg" 
                className="bg-gold-500 hover:bg-gold-600 text-charcoal-900 font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                See Upcoming Events
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* About Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gold-400 mb-6">
              Redefining Fashion Experiences
            </h2>
            <p className="text-lg text-cream-300 leading-relaxed max-w-3xl mx-auto">
              Trailblazer Queen Productions curates extraordinary fashion experiences that bridge 
              the gap between emerging talent and luxury markets. Our events showcase innovative 
              designers, cutting-edge technology, and the artistry that defines contemporary fashion.
            </p>
          </div>
          
          {/* Optional founder image placeholder */}
          <div className="relative w-full max-w-2xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-charcoal-800 to-charcoal-900 rounded-2xl border border-gold-400/20 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gold-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-8 h-8 text-gold-400" />
                </div>
                <p className="text-cream-400 text-sm">Brand Video Preview</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="px-6 py-16 bg-charcoal-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gold-400 mb-12">
            What Sets Us Apart
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="bg-charcoal-800/50 border-gold-400/20 hover:border-gold-400/40 transition-all duration-300 hover:scale-105 animate-slide-up group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gold-400/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-400/30 transition-colors duration-300">
                    <highlight.icon className="w-8 h-8 text-gold-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-cream-100 mb-4">
                    {highlight.title}
                  </h3>
                  <p className="text-cream-300 leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gold-400 mb-6">
            Ready to Experience Fashion's Future?
          </h2>
          <p className="text-lg text-cream-300 mb-8 leading-relaxed">
            Join us for exclusive events, discover emerging designers, and be part of the fashion revolution.
          </p>
          <Link to="/events">
            <Button 
              size="lg"
              variant="outline"
              className="border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-charcoal-900 font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
            >
              Explore Events
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
