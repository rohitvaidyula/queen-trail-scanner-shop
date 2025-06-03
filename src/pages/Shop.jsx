
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Ethereal Evening Gown",
      designer: "Isabella Romano",
      price: "$2,850",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500",
      category: "Evening Wear"
    },
    {
      id: 2,
      name: "Royal Sapphire Dress",
      designer: "Elena Vasquez",
      price: "$1,920",
      image: "https://images.unsplash.com/photo-1566479179817-c5c3e8b6a46d?w=500",
      category: "Cocktail"
    },
    {
      id: 3,
      name: "Golden Empress Gown",
      designer: "Maria Chen",
      price: "$3,200",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500",
      category: "Gala"
    },
    {
      id: 4,
      name: "Midnight Elegance Set",
      designer: "Sophie Laurent",
      price: "$2,100",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500",
      category: "Evening Wear"
    }
  ];

  const categories = ["All", "Evening Wear", "Cocktail", "Gala", "Accessories"];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Curated Collection</Text>
        <Text style={styles.headerSubtitle}>
          Exclusive designer pieces for the discerning woman
        </Text>
      </View>

      {/* Categories */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesContainer}
        contentContainerStyle={styles.categoriesContent}
      >
        {categories.map((category, index) => (
          <TouchableOpacity 
            key={index}
            style={[styles.categoryButton, index === 0 && styles.activeCategoryButton]}
          >
            <Text style={[styles.categoryText, index === 0 && styles.activeCategoryText]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Products Grid */}
      <View style={styles.productsContainer}>
        {products.map((product) => (
          <View key={product.id} style={styles.productCard}>
            <Image 
              source={{ uri: product.image }}
              style={styles.productImage}
            />
            
            <View style={styles.productInfo}>
              <View style={styles.productHeader}>
                <Text style={styles.categoryBadge}>{product.category}</Text>
                <Text style={styles.productPrice}>{product.price}</Text>
              </View>
              
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.designerName}>by {product.designer}</Text>
              
              <TouchableOpacity style={styles.addToCartButton}>
                <Text style={styles.addToCartText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>

      {/* Footer CTA */}
      <View style={styles.footerCTA}>
        <Text style={styles.ctaTitle}>Personal Shopping Service</Text>
        <Text style={styles.ctaText}>
          Let our style experts curate a personalized selection just for you
        </Text>
        <TouchableOpacity style={styles.ctaButton}>
          <Text style={styles.ctaButtonText}>Book Consultation</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F3EB',
  },
  header: {
    paddingHorizontal: 24,
    paddingVertical: 32,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1F1F1F',
    marginBottom: 12,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#6D6D6D',
    textAlign: 'center',
  },
  categoriesContainer: {
    marginBottom: 24,
  },
  categoriesContent: {
    paddingHorizontal: 24,
    gap: 12,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#D4A29C',
  },
  activeCategoryButton: {
    backgroundColor: '#D4A29C',
  },
  categoryText: {
    color: '#D4A29C',
    fontSize: 14,
    fontWeight: '600',
  },
  activeCategoryText: {
    color: '#FFFFFF',
  },
  productsContainer: {
    paddingHorizontal: 24,
  },
  productCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  productImage: {
    width: '100%',
    height: 280,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  productInfo: {
    padding: 20,
  },
  productHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  categoryBadge: {
    backgroundColor: '#F1EBE0',
    color: '#D4A29C',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 12,
    fontWeight: '600',
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D4A29C',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F1F1F',
    marginBottom: 4,
  },
  designerName: {
    fontSize: 14,
    color: '#6D6D6D',
    marginBottom: 16,
  },
  addToCartButton: {
    backgroundColor: '#1F1F1F',
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
  },
  addToCartText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  footerCTA: {
    backgroundColor: '#F1EBE0',
    margin: 24,
    padding: 32,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 40,
  },
  ctaTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F1F1F',
    marginBottom: 12,
    textAlign: 'center',
  },
  ctaText: {
    fontSize: 14,
    color: '#4F4F4F',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 24,
  },
  ctaButton: {
    backgroundColor: '#D4A29C',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 25,
  },
  ctaButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default Shop;
