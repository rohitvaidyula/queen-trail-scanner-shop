
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigate } from 'react-router-dom';

const ScanResult = () => {
  const navigate = useNavigate();

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
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigate(-1)}
          style={styles.backButton}
        >
          <Text style={styles.backButtonText}>← Back to Scanner</Text>
        </TouchableOpacity>
        <View style={styles.confidenceBadge}>
          <Text style={styles.confidenceText}>{scanResult.confidence} Match</Text>
        </View>
      </View>

      {/* Results Content */}
      <View style={styles.content}>
        {/* Image Preview */}
        <View style={styles.imageSection}>
          <Image 
            source={{ uri: scanResult.image }}
            style={styles.scanImage}
          />
          <Text style={styles.imageCaption}>Scanned item preview</Text>
        </View>

        {/* Item Details */}
        <View style={styles.detailsSection}>
          <Text style={styles.itemTitle}>{scanResult.dressName}</Text>
          <Text style={styles.itemDescription}>{scanResult.description}</Text>

          {/* Designer Info */}
          <View style={styles.designerCard}>
            <View style={styles.designerHeader}>
              <Image 
                source={{ uri: scanResult.designer.image }}
                style={styles.designerImage}
              />
              <View style={styles.designerInfo}>
                <Text style={styles.designedBy}>Designed by</Text>
                <TouchableOpacity>
                  <Text style={styles.designerName}>{scanResult.designer.name} ℹ️</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.designerBio}>{scanResult.designer.bio}</Text>
          </View>

          {/* Pricing */}
          <View style={styles.pricingSection}>
            <Text style={styles.price}>{scanResult.price}</Text>
            <Text style={styles.priceNote}>Exclusive designer piece</Text>
          </View>

          {/* CTA Button */}
          <TouchableOpacity 
            style={styles.buyButton}
            onPress={() => navigate('/shop')}
          >
            <Text style={styles.buyButtonText}>🛍️ Buy This Look</Text>
          </TouchableOpacity>

          {/* Additional Info */}
          <View style={styles.analysisCard}>
            <Text style={styles.analysisTitle}>AI Analysis Details</Text>
            <View style={styles.analysisGrid}>
              <View style={styles.analysisItem}>
                <Text style={styles.analysisLabel}>Style Category</Text>
                <Text style={styles.analysisValue}>Evening Wear</Text>
              </View>
              <View style={styles.analysisItem}>
                <Text style={styles.analysisLabel}>Material</Text>
                <Text style={styles.analysisValue}>Silk Chiffon</Text>
              </View>
              <View style={styles.analysisItem}>
                <Text style={styles.analysisLabel}>Season</Text>
                <Text style={styles.analysisValue}>Spring/Summer</Text>
              </View>
              <View style={styles.analysisItem}>
                <Text style={styles.analysisLabel}>Occasion</Text>
                <Text style={styles.analysisValue}>Formal Events</Text>
              </View>
            </View>
          </View>
        </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(212, 162, 156, 0.2)',
  },
  backButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  backButtonText: {
    color: '#D4A29C',
    fontSize: 16,
    fontWeight: '600',
  },
  confidenceBadge: {
    backgroundColor: 'rgba(191, 162, 126, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(191, 162, 126, 0.3)',
  },
  confidenceText: {
    color: '#997E41',
    fontSize: 12,
    fontWeight: '600',
  },
  content: {
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  imageSection: {
    alignItems: 'center',
    marginBottom: 32,
  },
  scanImage: {
    width: 280,
    height: 373,
    borderRadius: 16,
    backgroundColor: '#F1EBE0',
  },
  imageCaption: {
    fontSize: 12,
    color: '#6D6D6D',
    marginTop: 16,
  },
  detailsSection: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3B2F2F',
    marginBottom: 16,
  },
  itemDescription: {
    fontSize: 16,
    color: '#6D6D6D',
    lineHeight: 24,
    marginBottom: 24,
  },
  designerCard: {
    backgroundColor: 'rgba(241, 235, 224, 0.5)',
    padding: 24,
    borderRadius: 12,
    marginBottom: 24,
  },
  designerHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  designerImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16,
  },
  designerInfo: {
    flex: 1,
  },
  designedBy: {
    fontSize: 14,
    color: '#6D6D6D',
    marginBottom: 4,
  },
  designerName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#D4A29C',
  },
  designerBio: {
    fontSize: 14,
    color: '#6D6D6D',
    lineHeight: 20,
  },
  pricingSection: {
    marginBottom: 24,
  },
  price: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#D4A29C',
    marginBottom: 4,
  },
  priceNote: {
    fontSize: 14,
    color: '#6D6D6D',
  },
  buyButton: {
    backgroundColor: '#D4A29C',
    paddingVertical: 20,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  buyButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  analysisCard: {
    backgroundColor: 'rgba(241, 235, 224, 0.4)',
    padding: 16,
    borderRadius: 12,
  },
  analysisTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#D4A29C',
    marginBottom: 16,
  },
  analysisGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  analysisItem: {
    width: '48%',
    marginBottom: 12,
  },
  analysisLabel: {
    fontSize: 12,
    color: '#6D6D6D',
    marginBottom: 2,
  },
  analysisValue: {
    fontSize: 14,
    color: '#3B2F2F',
    fontWeight: '500',
  },
});

export default ScanResult;
