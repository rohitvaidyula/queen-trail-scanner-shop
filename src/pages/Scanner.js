
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Scanner = () => {
  const [isScanning, setIsScanning] = useState(false);
  const navigation = useNavigation();

  const handleCapture = () => {
    setIsScanning(true);
    // Simulate scanning process
    setTimeout(() => {
      setIsScanning(false);
      navigation.navigate('ScanResult');
    }, 2000);
  };

  const handleUpload = () => {
    // Simulate file upload
    navigation.navigate('ScanResult');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>AI Fashion Scanner</Text>
        <Text style={styles.headerSubtitle}>
          Discover designer pieces and shop the look instantly
        </Text>
      </View>

      {/* Camera View */}
      <View style={styles.cameraContainer}>
        <View style={styles.cameraView}>
          {isScanning ? (
            <View style={styles.scanningView}>
              <Text style={styles.scanningIcon}>⚡</Text>
              <Text style={styles.scanningText}>Analyzing fashion...</Text>
              <Text style={styles.scanningSubtext}>AI is identifying the design</Text>
            </View>
          ) : (
            <View style={styles.cameraPlaceholder}>
              <Text style={styles.cameraIcon}>📷</Text>
              <Text style={styles.cameraText}>Camera preview will appear here</Text>
              <Text style={styles.cameraSubtext}>Point at any fashion item to scan</Text>
            </View>
          )}

          {/* Scan frame guide */}
          {!isScanning && (
            <View style={styles.scanFrame}>
              <View style={styles.scanCorner} />
              <Text style={styles.scanGuideText}>Align item here</Text>
            </View>
          )}
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleCapture}
          disabled={isScanning}
          style={[styles.captureButton, isScanning && styles.disabledButton]}
        >
          <Text style={styles.captureButtonText}>
            {isScanning ? 'Scanning...' : '📷 Capture & Analyze'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleUpload}
          style={styles.uploadButton}
        >
          <Text style={styles.uploadButtonText}>📁 Upload from Gallery</Text>
        </TouchableOpacity>
      </View>

      {/* Tips */}
      <View style={styles.tipsContainer}>
        <Text style={styles.tipsTitle}>Scanning Tips</Text>
        <Text style={styles.tipText}>• Ensure good lighting for best results</Text>
        <Text style={styles.tipText}>• Keep the item centered in the frame</Text>
        <Text style={styles.tipText}>• Works best with clear, unobstructed views</Text>
      </View>
    </View>
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
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#D4A29C',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#6D6D6D',
    textAlign: 'center',
  },
  cameraContainer: {
    flex: 1,
    marginHorizontal: 24,
    marginBottom: 24,
  },
  cameraView: {
    flex: 1,
    backgroundColor: '#E8DDC7',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    borderWidth: 2,
    borderColor: '#D4A29C',
  },
  scanningView: {
    alignItems: 'center',
  },
  scanningIcon: {
    fontSize: 64,
    marginBottom: 16,
  },
  scanningText: {
    fontSize: 18,
    color: '#D4A29C',
    fontWeight: '600',
    marginBottom: 8,
  },
  scanningSubtext: {
    fontSize: 14,
    color: '#6D6D6D',
  },
  cameraPlaceholder: {
    alignItems: 'center',
  },
  cameraIcon: {
    fontSize: 64,
    marginBottom: 16,
  },
  cameraText: {
    fontSize: 16,
    color: '#6D6D6D',
    marginBottom: 8,
  },
  cameraSubtext: {
    fontSize: 14,
    color: '#888888',
  },
  scanFrame: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: '#D4A29C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanCorner: {
    position: 'absolute',
    top: -2,
    left: -2,
    width: 32,
    height: 32,
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderTopColor: '#D4A29C',
    borderLeftColor: '#D4A29C',
  },
  scanGuideText: {
    backgroundColor: 'rgba(247, 243, 235, 0.9)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
    fontSize: 12,
    color: '#D4A29C',
    fontWeight: '600',
  },
  buttonContainer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  captureButton: {
    backgroundColor: '#D4A29C',
    paddingVertical: 20,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 16,
  },
  disabledButton: {
    opacity: 0.5,
  },
  captureButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  uploadButton: {
    borderWidth: 2,
    borderColor: '#D4A29C',
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: 'center',
  },
  uploadButtonText: {
    color: '#D4A29C',
    fontSize: 16,
    fontWeight: '600',
  },
  tipsContainer: {
    backgroundColor: '#F1EBE0',
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 8,
    marginBottom: 32,
  },
  tipsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#D4A29C',
    marginBottom: 8,
  },
  tipText: {
    fontSize: 12,
    color: '#6D6D6D',
    marginBottom: 4,
  },
});

export default Scanner;
