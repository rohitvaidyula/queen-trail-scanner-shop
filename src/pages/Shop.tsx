
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter, SortAsc } from "lucide-react";

const Shop = () => {
  const [selectedDesigner, setSelectedDesigner] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("name");

  const products = [
    {
      id: 1,
      name: "Ethereal Evening Gown",
      price: 2850,
      designer: "Isabella Romano",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400"
    },
    {
      id: 2,
      name: "Modern Minimalist Dress",
      price: 1200,
      designer: "Elena Marchetti",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400"
    },
    {
      id: 3,
      name: "Avant-Garde Cocktail Piece",
      price: 1850,
      designer: "Marcus Williams",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400"
    },
    {
      id: 4,
      name: "Luxury Silk Ensemble",
      price: 3200,
      designer: "Aria Nakamura",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400"
    },
    {
      id: 5,
      name: "Contemporary Art Dress",
      price: 2100,
      designer: "Lucas Chen",
      image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?w=400"
    },
    {
      id: 6,
      name: "Heritage Collection Gown",
      price: 2650,
      designer: "Isabella Romano",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400"
    }
  ];

  const designers = ["all", ...Array.from(new Set(products.map(p => p.designer)))];

  const filteredProducts = products
    .filter(product => selectedDesigner === "all" || product.designer === selectedDesigner)
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "designer":
          return a.designer.localeCompare(b.designer);
        default:
          return a.name.localeCompare(b.name);
      }
    });

  return (
    <div className="min-h-screen pt-8 px-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold warm-clay-text-gradient mb-4">
          Designer Marketplace
        </h1>
        <p className="text-espresso-600 text-lg max-w-2xl mx-auto">
          Discover and purchase exclusive pieces from our curated collection of luxury designers.
        </p>
      </div>

      {/* Filters */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-warm-clay-500" />
              <span className="text-espresso-600 font-medium">Filter by Designer:</span>
            </div>
            <Select value={selectedDesigner} onValueChange={setSelectedDesigner}>
              <SelectTrigger className="w-48 bg-background border-warm-clay-300/20 text-espresso-800">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-background border-warm-clay-300/20">
                {designers.map(designer => (
                  <SelectItem key={designer} value={designer} className="text-espresso-800 hover:bg-warm-clay-300/20">
                    {designer === "all" ? "All Designers" : designer}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <SortAsc size={20} className="text-warm-clay-500" />
              <span className="text-espresso-600 font-medium">Sort by:</span>
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48 bg-background border-warm-clay-300/20 text-espresso-800">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-background border-warm-clay-300/20">
                <SelectItem value="name" className="text-espresso-800 hover:bg-warm-clay-300/20">Name</SelectItem>
                <SelectItem value="price-low" className="text-espresso-800 hover:bg-warm-clay-300/20">Price: Low to High</SelectItem>
                <SelectItem value="price-high" className="text-espresso-800 hover:bg-warm-clay-300/20">Price: High to Low</SelectItem>
                <SelectItem value="designer" className="text-espresso-800 hover:bg-warm-clay-300/20">Designer</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <Card 
              key={product.id}
              className="bg-background border-warm-clay-300/20 hover:border-warm-clay-300/40 transition-all duration-300 hover:scale-105 animate-slide-up group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className="aspect-[3/4] bg-cover bg-center"
                style={{ backgroundImage: `url(${product.image})` }}
              />
              <CardContent className="p-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-espresso-800 group-hover:text-warm-clay-500 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-espresso-600 text-sm">
                    by {product.designer}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-warm-clay-500">
                      ${product.price.toLocaleString()}
                    </span>
                  </div>
                  <Button 
                    className="w-full bg-warm-clay-500 hover:bg-warm-clay-600 text-creamy-sand-50 font-semibold rounded-full transition-all duration-300 hover:scale-105"
                  >
                    Buy Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Results Summary */}
      <div className="max-w-6xl mx-auto mt-12 mb-8 text-center">
        <p className="text-espresso-600">
          Showing {filteredProducts.length} of {products.length} pieces
          {selectedDesigner !== "all" && ` by ${selectedDesigner}`}
        </p>
      </div>
    </div>
  );
};

export default Shop;
