import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import { theme } from '../theme';

export default function InstructionScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comment ça marche ?</Text>
      
      <View style={styles.instructionContainer}>
        <View style={styles.stepRow}>
            <Text style={styles.stepNumber}>01</Text>
            <Text style={styles.instructionText}>Sélectionnez un dinosaure dans la liste.</Text>
        </View>
        <View style={styles.stepRow}>
            <Text style={styles.stepNumber}>02</Text>
            <Text style={styles.instructionText}>Scannez le sol avec votre caméra jusqu'à ce que le réticule devienne jaune.</Text>
        </View>
        <View style={styles.stepRow}>
            <Text style={styles.stepNumber}>03</Text>
            <Text style={styles.instructionText}>Appuyez sur "PLACER" pour faire apparaître le modèle.</Text>
        </View>
      </View>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('DinosaurList')}
      >
        <Text style={styles.buttonText}>COMMENCER</Text>
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
    marginBottom: 40,
    textAlign: 'center',
  },
  instructionContainer: {
    marginBottom: 40,
    width: '100%',
    paddingHorizontal: 10,
  },
  stepRow: {
    flexDirection: 'row',
    marginBottom: theme.spacing.l,
    alignItems: 'flex-start',
  },
  stepNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.accent,
    marginRight: theme.spacing.m,
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
  },
  instructionText: {
    ...theme.text.body,
    flex: 1,
    lineHeight: 24,
    fontSize: 16,
  },
  button: {
    backgroundColor: theme.colors.secondary,
    paddingHorizontal: 50,
    paddingVertical: 18,
    borderWidth: 2,
    borderColor: theme.colors.accent,
    borderRadius: theme.layout.borderRadius,
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
});
