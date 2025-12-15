import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { theme } from '../theme';

export default function InstructionScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comment ça marche ?</Text>
      
      <View style={styles.instructionContainer}>
        <Text style={styles.instructionText}>1. Accordez la permission d'accès à la caméra.</Text>
        <Text style={styles.instructionText}>2. Choisissez un dinosaure dans la liste.</Text>
        <Text style={styles.instructionText}>3. Pointez votre caméra vers un marqueur ou un espace ouvert.</Text>
        <Text style={styles.instructionText}>4. Découvrez les dinosaures en 3D !</Text>
      </View>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('DinosaurList')}
      >
        <Text style={styles.buttonText}>Voir les Dinosaures</Text>
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
    padding: theme.spacing.m,
  },
  title: {
    ...theme.text.title,
    marginBottom: 30,
  },
  instructionContainer: {
    marginBottom: 40,
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    padding: theme.spacing.l,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: theme.colors.secondary,
  },
  instructionText: {
    ...theme.text.body,
    marginBottom: 15,
    lineHeight: 24,
  },
  button: {
    backgroundColor: theme.colors.secondary,
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 30,
    elevation: 5,
    borderWidth: 2,
    borderColor: theme.colors.accent,
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
