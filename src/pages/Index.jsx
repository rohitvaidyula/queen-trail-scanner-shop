
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Index = () => {
  const navigation = useNavigation();

  const featuredEvents = [
    {
      id: 1,
      title: "Elegance & Excellence Gala",
      date: "December 15, 2024",
      location: "Beverly Hills Hotel",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800",
      description: "An evening celebrating women entrepreneurs and their extraordinary achievements."
    },
    {
      id: 2,
      title: "Trailblazer Summit 2024",
      date: "January 20, 2025",
      location: "The Ritz-Carlton",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800",
      description: "Networking and inspiration for the next generation of business leaders."
    }
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Hero Section */}
      <View style={styles.hero}>
        <View style={styles.heroContent}>
          <View style={styles.logoContainer}>
            <Image 
              source={{ uri: "/lovable-uploads/1960f31f-f620-420f-98f6-2d0b6d504877.png" }}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          
          <Text style={styles.heroTitle}>
            Trailblazer Queen Productions
          </Text>
          
          <Text style={styles.heroSubtitle}>
            Curating Exceptional Experiences for Visionary Women
          </Text>
          
          <Text style={styles.heroDescription}>
            Where elegance meets empowerment. Join our exclusive community of trailblazing women 
            who are redefining success and creating lasting impact in their industries.
          </Text>
        </View>
      </View>

      {/* Featured Events */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Events</Text>
        
        {featuredEvents.map((event) => (
          <TouchableOpacity 
            key={event.id}
            style={styles.eventCard}
            onPress={() => navigation.navigate('Events')}
          >
            <Image 
              source={{ uri: event.image }}
              style={styles.eventImage}
            />
            <View style={styles.eventContent}>
              <Text style={styles.eventTitle}>{event.title}</Text>
              <Text style={styles.eventDate}>{event.date}</Text>
              <Text style={styles.eventLocation}>{event.location}</Text>
              <Text style={styles.eventDescription}>{event.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
        
        <TouchableOpacity 
          style={styles.viewAllButton}
          onPress={() => navigation.navigate('Events')}
        >
          <Text style={styles.viewAllText}>View All Events</Text>
        </TouchableOpacity>
      </View>

      {/* About Section */}
      <View style={styles.aboutSection}>
        <Text style={styles.aboutTitle}>About Trailblazer Queen</Text>
        <Text style={styles.aboutText}>
          We create extraordinary experiences that celebrate and empower women leaders. 
          From intimate networking soirées to grand galas, every event is meticulously 
          crafted to inspire, connect, and elevate our community.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F3EB',
  },
  hero: {
    paddingHorizontal: 24,
    paddingVertical: 48,
    alignItems: 'center',
  },
  heroContent: {
    alignItems: 'center',
    maxWidth: 600,
  },
  logoContainer: {
    marginBottom: 24,
  },
  logo: {
    width: 80,
    height: 80,
  },
  heroTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#1F1F1F',
    textAlign: 'center',
    marginBottom: 16,
  },
  heroSubtitle: {
    fontSize: 20,
    color: '#D4A29C',
    textAlign: 'center',
    marginBottom: 24,
  },
  heroDescription: {
    fontSize: 16,
    color: '#4F4F4F',
    textAlign: 'center',
    lineHeight: 24,
  },
  section: {
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F1F1F',
    marginBottom: 24,
    textAlign: 'center',
  },
  eventCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  eventImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  eventContent: {
    padding: 20,
  },
  eventTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F1F1F',
    marginBottom: 8,
  },
  eventDate: {
    fontSize: 16,
    color: '#D4A29C',
    marginBottom: 4,
  },
  eventLocation: {
    fontSize: 14,
    color: '#6D6D6D',
    marginBottom: 12,
  },
  eventDescription: {
    fontSize: 14,
    color: '#4F4F4F',
    lineHeight: 20,
  },
  viewAllButton: {
    backgroundColor: '#D4A29C',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 16,
  },
  viewAllText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  aboutSection: {
    backgroundColor: '#F1EBE0',
    paddingHorizontal: 24,
    paddingVertical: 40,
    marginHorizontal: 24,
    borderRadius: 12,
    marginBottom: 32,
  },
  aboutTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F1F1F',
    marginBottom: 16,
    textAlign: 'center',
  },
  aboutText: {
    fontSize: 16,
    color: '#4F4F4F',
    lineHeight: 24,
    textAlign: 'center',
  },
});

export default Index;
