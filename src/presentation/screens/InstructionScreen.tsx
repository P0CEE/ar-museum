import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function InstructionScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comment ça marche ?</Text>
      
      <View style={styles.instructionContainer}>
        <Text style={styles.instructionText}>1. Accordez la permission d'accès à la caméra.</Text>
        <Text style={styles.instructionText}>2. Pointez votre caméra vers un marqueur ou un espace ouvert.</Text>
        <Text style={styles.instructionText}>3. Découvrez les dinosaures en 3D !</Text>
      </View>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('ARScreen')}
      >
        <Text style={styles.buttonText}>Scanner</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#2c3e50',
  },
  instructionContainer: {
    marginBottom: 40,
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 20,
  },
  instructionText: {
    fontSize: 18,
    color: '#34495e',
    marginBottom: 15,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#27ae60',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 30,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
