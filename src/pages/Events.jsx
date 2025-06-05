import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigate } from 'react-router-dom';

const Events = () => {
  const navigate = useNavigate();

  const events = [
    {
      id: 1,
      title: "Elegance & Excellence Gala",
      date: "December 15, 2024",
      time: "7:00 PM - 11:00 PM",
      location: "Beverly Hills Hotel, Crystal Ballroom",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800",
      description: "Join us for an unforgettable evening celebrating women entrepreneurs and their extraordinary achievements. This exclusive gala features keynote presentations, networking opportunities, and recognition of outstanding female leaders.",
      price: "$350",
      category: "Gala"
    },
    {
      id: 2,
      title: "Trailblazer Summit 2024",
      date: "January 20, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "The Ritz-Carlton, Grand Conference Center",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800",
      description: "A full-day summit featuring workshops, panel discussions, and networking sessions designed to inspire and empower the next generation of business leaders.",
      price: "$275",
      category: "Summit"
    },
    {
      id: 3,
      title: "Queens of Innovation Workshop",
      date: "February 8, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Manhattan Creative Hub",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800",
      description: "An intimate workshop focusing on innovation strategies, creative problem-solving, and building sustainable business models in today's dynamic market.",
      price: "$150",
      category: "Workshop"
    },
    {
      id: 4,
      title: "Spring Garden Party",
      date: "March 15, 2025",
      time: "3:00 PM - 7:00 PM",
      location: "Private Estate, Malibu",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800",
      description: "A sophisticated outdoor gathering in a stunning garden setting. Perfect for meaningful connections and celebrating the arrival of spring with fellow trailblazers.",
      price: "$200",
      category: "Social"
    }
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Upcoming Events</Text>
        <Text style={styles.headerSubtitle}>
          Discover extraordinary experiences crafted for visionary women
        </Text>
      </View>

      {/* Events List */}
      <View style={styles.eventsContainer}>
        {events.map((event) => (
          <View key={event.id} style={styles.eventCard}>
            <Image 
              source={{ uri: event.image }}
              style={styles.eventImage}
            />
            
            <View style={styles.eventContent}>
              <View style={styles.eventHeader}>
                <Text style={styles.categoryBadge}>{event.category}</Text>
                <Text style={styles.eventPrice}>{event.price}</Text>
              </View>
              
              <Text style={styles.eventTitle}>{event.title}</Text>
              
              <View style={styles.eventDetails}>
                <Text style={styles.eventDate}>{event.date}</Text>
                <Text style={styles.eventTime}>{event.time}</Text>
                <Text style={styles.eventLocation}>{event.location}</Text>
              </View>
              
              <Text style={styles.eventDescription}>{event.description}</Text>
              
              <TouchableOpacity 
                style={styles.rsvpButton}
                onPress={() => navigate('/rsvp', { state: { eventId: event.id } })}
              >
                <Text style={styles.rsvpButtonText}>Get Tickets</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>

      {/* Call to Action */}
      <View style={styles.ctaSection}>
        <Text style={styles.ctaTitle}>Can't find what you're looking for?</Text>
        <Text style={styles.ctaText}>
          Subscribe to our newsletter for exclusive invitations to private events and early access to new experiences.
        </Text>
        <TouchableOpacity style={styles.ctaButton}>
          <Text style={styles.ctaButtonText}>Subscribe Now</Text>
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
  eventsContainer: {
    paddingHorizontal: 24,
  },
  eventCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  eventImage: {
    width: '100%',
    height: 220,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  eventContent: {
    padding: 24,
  },
  eventHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  categoryBadge: {
    backgroundColor: '#D4A29C',
    color: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    fontSize: 12,
    fontWeight: '600',
  },
  eventPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D4A29C',
  },
  eventTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F1F1F',
    marginBottom: 16,
  },
  eventDetails: {
    marginBottom: 16,
  },
  eventDate: {
    fontSize: 16,
    color: '#D4A29C',
    fontWeight: '600',
    marginBottom: 4,
  },
  eventTime: {
    fontSize: 14,
    color: '#6D6D6D',
    marginBottom: 4,
  },
  eventLocation: {
    fontSize: 14,
    color: '#6D6D6D',
  },
  eventDescription: {
    fontSize: 14,
    color: '#4F4F4F',
    lineHeight: 22,
    marginBottom: 24,
  },
  rsvpButton: {
    backgroundColor: '#D4A29C',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 25,
    alignItems: 'center',
  },
  rsvpButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  ctaSection: {
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
    backgroundColor: '#1F1F1F',
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

export default Events;
