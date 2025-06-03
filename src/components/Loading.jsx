
import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const Loading = ({ message = "Curating elegance..." }) => {
  const spinValue = new Animated.Value(0);

  React.useEffect(() => {
    const spin = () => {
      spinValue.setValue(0);
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }).start(() => spin());
    };
    spin();
  }, []);

  const rotate = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Animated.View style={[styles.spinningBorder, { transform: [{ rotate }] }]} />
        <Animated.View style={[styles.spinningBorderReverse, { transform: [{ rotate: rotate }] }]} />
        <View style={styles.logoCenter}>
          <Text style={styles.logoText}>TQ</Text>
        </View>
      </View>
      
      <Text style={styles.tagline}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F3EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    width: 120,
    height: 120,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  spinningBorder: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: 'transparent',
    borderTopColor: 'rgba(212, 162, 156, 0.3)',
  },
  spinningBorderReverse: {
    position: 'absolute',
    width: 104,
    height: 104,
    borderRadius: 52,
    borderWidth: 4,
    borderColor: 'transparent',
    borderTopColor: 'rgba(212, 162, 156, 0.5)',
  },
  logoCenter: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D4A29C',
  },
  tagline: {
    fontSize: 18,
    color: '#6D6D6D',
    fontWeight: '300',
    textAlign: 'center',
  },
});

export default Loading;
