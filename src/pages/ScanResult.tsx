
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ShoppingBag, Info } from "lucide-react";
import { Link } from "react-router-dom";

const ScanResult = () => {
  const scanResult = {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500",
    dressName: "Ethereal Evening Gown",
    description: "A stunning floor-length evening gown featuring hand-embroidered gold thread detailing and a flowing silk chiffon overlay. This piece embodies timeless elegance with contemporary silhouettes.",
    designer: {
      name: "Isabella Romano",
      bio: "Italian couturier with over 15 years of experience in luxury fashion. Known for intricate handwork and sustainable practices, Isabella combines traditional Italian craftsmanship with modern design sensibilities.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300"
    },
    price: "$2,850",
    confidence: "96%"
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-rose-gold-300/20">
        <Link to="/scanner">
          <Button variant="ghost" size="sm" className="text-rose-gold-300 hover:text-rose-gold-400">
            <ArrowLeft size={20} className="mr-2" />
            Back to Scanner
          </Button>
        </Link>
        <Badge className="bg-dusty-blush-400/20 text-dusty-blush-300 border-dusty-blush-300/30">
          {scanResult.confidence} Match
        </Badge>
      </div>

      {/* Results Content */}
      <div className="px-6 py-8 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Image Preview */}
          <div className="space-y-4">
            <Card className="overflow-hidden bg-charcoal-800/50 border-rose-gold-300/20">
              <div 
                className="aspect-[3/4] bg-cover bg-center"
                style={{ backgroundImage: `url(${scanResult.image})` }}
              />
            </Card>
            
            <div className="text-center text-sm text-cream-300">
              Scanned item preview
            </div>
          </div>

          {/* Item Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-cream-50 mb-4">
                {scanResult.dressName}
              </h1>
              <p className="text-lg text-cream-200 leading-relaxed">
                {scanResult.description}
              </p>
            </div>

            {/* Designer Info */}
            <Card className="bg-charcoal-800/30 border-rose-gold-300/10">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div 
                    className="w-16 h-16 rounded-full bg-cover bg-center flex-shrink-0"
                    style={{ backgroundImage: `url(${scanResult.designer.image})` }}
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-cream-200">Designed by</span>
                      <Button
                        variant="link"
                        className="text-rose-gold-300 hover:text-rose-gold-400 p-0 h-auto font-semibold text-lg"
                      >
                        {scanResult.designer.name}
                        <Info size={16} className="ml-1" />
                      </Button>
                    </div>
                    <p className="text-sm text-cream-300 leading-relaxed">
                      {scanResult.designer.bio}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pricing */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-rose-gold-300">{scanResult.price}</p>
                <p className="text-sm text-cream-300">Exclusive designer piece</p>
              </div>
            </div>

            {/* CTA Button */}
            <Link to="/shop">
              <Button 
                size="lg"
                className="w-full bg-rose-gold-300 hover:bg-rose-gold-400 text-charcoal-900 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                <ShoppingBag size={24} className="mr-3" />
                Buy This Look
              </Button>
            </Link>

            {/* Additional Info */}
            <Card className="bg-charcoal-800/20 border-rose-gold-300/10">
              <CardContent className="p-4">
                <h3 className="text-rose-gold-300 font-semibold mb-2">AI Analysis Details</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-cream-300">Style Category</p>
                    <p className="text-cream-100">Evening Wear</p>
                  </div>
                  <div>
                    <p className="text-cream-300">Material</p>
                    <p className="text-cream-100">Silk Chiffon</p>
                  </div>
                  <div>
                    <p className="text-cream-300">Season</p>
                    <p className="text-cream-100">Spring/Summer</p>
                  </div>
                  <div>
                    <p className="text-cream-300">Occasion</p>
                    <p className="text-cream-100">Formal Events</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScanResult;
