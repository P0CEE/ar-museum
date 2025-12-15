import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { theme } from '../theme';

export default function WelcomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Musée des Dinosaures</Text>
      <Text style={styles.subtitle}>Réalité Augmentée</Text>
      
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Instructions')}
      >
        <Text style={styles.buttonText}>ENTRER</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.linkButton}
        onPress={() => navigation.navigate('Privacy')}
      >
        <Text style={styles.linkText}>Confidentialité & Données</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...theme.text.title,
    marginBottom: theme.spacing.s,
    textAlign: 'center',
  },
  subtitle: {
    ...theme.text.subtitle,
    marginBottom: 50,
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 50,
    paddingVertical: 18,
    borderRadius: theme.layout.borderRadius,
    elevation: 0,
    borderWidth: 2,
    borderColor: theme.colors.text,
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  linkButton: {
    marginTop: 30,
    padding: 10,
  },
  linkText: {
    color: theme.colors.text,
    fontSize: 14,
    textDecorationLine: 'underline',
    opacity: 0.7,
  }
});
