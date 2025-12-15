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
        <Text style={styles.buttonText}>Entrer</Text>
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
  },
  subtitle: {
    ...theme.text.subtitle,
    marginBottom: 50,
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 30,
    elevation: 5,
    borderWidth: 2,
    borderColor: theme.colors.secondary,
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
