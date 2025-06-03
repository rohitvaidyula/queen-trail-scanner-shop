
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const RSVP = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    interestLevel: '',
    notes: ''
  });
  const [showThankYou, setShowThankYou] = useState(false);

  const eventDetails = {
    title: "Elegance & Excellence Gala",
    date: "December 15, 2024",
    time: "7:00 PM - 11:00 PM",
    location: "Beverly Hills Hotel, Crystal Ballroom",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800"
  };

  const interestLevels = [
    "Just browsing",
    "Definitely attending", 
    "Bringing friends"
  ];

  const handleSubmit = () => {
    if (!formData.fullName || !formData.email) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      setShowThankYou(true);
    }, 1000);
  };

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (showThankYou) {
    return (
      <View style={styles.thankYouContainer}>
        <Text style={styles.thankYouTitle}>Thank You!</Text>
        <Text style={styles.thankYouMessage}>
          Thanks for RSVPing! We'll be in touch soon with exclusive updates.
        </Text>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.navigate('Events')}
        >
          <Text style={styles.backButtonText}>Back to Events</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={styles.backLink}
        >
          <Text style={styles.backLinkText}>← Back to Events</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>RSVP for {eventDetails.title}</Text>
      </View>

      {/* Event Details */}
      <View style={styles.eventSection}>
        <View style={styles.eventCard}>
          <Text style={styles.eventTitle}>{eventDetails.title}</Text>
          <Text style={styles.eventDate}>{eventDetails.date}</Text>
          <Text style={styles.eventTime}>{eventDetails.time}</Text>
          <Text style={styles.eventLocation}>{eventDetails.location}</Text>
        </View>
      </View>

      {/* RSVP Form */}
      <View style={styles.formSection}>
        <Text style={styles.formTitle}>Event Registration</Text>
        
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Full Name *</Text>
          <TextInput
            style={styles.input}
            value={formData.fullName}
            onChangeText={(value) => updateFormData('fullName', value)}
            placeholder="Enter your full name"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email *</Text>
          <TextInput
            style={styles.input}
            value={formData.email}
            onChangeText={(value) => updateFormData('email', value)}
            placeholder="Enter your email address"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Phone</Text>
          <TextInput
            style={styles.input}
            value={formData.phone}
            onChangeText={(value) => updateFormData('phone', value)}
            placeholder="Enter your phone number"
            placeholderTextColor="#999"
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>City</Text>
          <TextInput
            style={styles.input}
            value={formData.city}
            onChangeText={(value) => updateFormData('city', value)}
            placeholder="Enter your city"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Interest Level</Text>
          <View style={styles.radioGroup}>
            {interestLevels.map((level) => (
              <TouchableOpacity
                key={level}
                style={styles.radioOption}
                onPress={() => updateFormData('interestLevel', level)}
              >
                <View style={[
                  styles.radioCircle,
                  formData.interestLevel === level && styles.radioSelected
                ]} />
                <Text style={styles.radioText}>{level}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Notes</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={formData.notes}
            onChangeText={(value) => updateFormData('notes', value)}
            placeholder="Any additional notes or special requests..."
            placeholderTextColor="#999"
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit RSVP</Text>
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
    paddingVertical: 24,
  },
  backLink: {
    marginBottom: 16,
  },
  backLinkText: {
    color: '#D4A29C',
    fontSize: 16,
    fontWeight: '600',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F1F1F',
  },
  eventSection: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  eventCard: {
    backgroundColor: '#F1EBE0',
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(212, 162, 156, 0.2)',
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
  formSection: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F1F1F',
    marginBottom: 24,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F1F1F',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#E8DDC7',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#1F1F1F',
  },
  textArea: {
    height: 100,
    paddingTop: 12,
  },
  radioGroup: {
    gap: 12,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#D4A29C',
    backgroundColor: '#FFFFFF',
  },
  radioSelected: {
    backgroundColor: '#D4A29C',
  },
  radioText: {
    fontSize: 16,
    color: '#1F1F1F',
  },
  submitButton: {
    backgroundColor: '#D4A29C',
    paddingVertical: 18,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  thankYouContainer: {
    flex: 1,
    backgroundColor: '#F7F3EB',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  thankYouTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#D4A29C',
    marginBottom: 24,
    textAlign: 'center',
  },
  thankYouMessage: {
    fontSize: 18,
    color: '#1F1F1F',
    textAlign: 'center',
    lineHeight: 26,
    marginBottom: 40,
  },
  backButton: {
    backgroundColor: '#1F1F1F',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 25,
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default RSVP;
