import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { theme } from '../theme';

export default function PrivacyScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Confidentialité & Données</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. Traitement Local</Text>
          <Text style={styles.text}>
            La caméra est utilisée exclusivement pour l'analyse locale nécessaire à la Réalité Augmentée. 
            Aucune image ou vidéo n'est transmise vers des serveurs externes.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2. Aucune Collecte</Text>
          <Text style={styles.text}>
            Nous ne collectons aucune donnée personnelle, identifiant publicitaire ou information de localisation.
            Tout se passe sur votre téléphone.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>3. Permissions</Text>
          <Text style={styles.text}>
            La permission "Caméra" est la seule requise pour le fonctionnement de l'expérience AR.
          </Text>
        </View>
      </ScrollView>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Retour</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingTop: 50,
  },
  scrollContent: {
    padding: theme.spacing.m,
  },
  title: {
    ...theme.text.title,
    fontSize: 24,
    marginBottom: theme.spacing.xl,
    textAlign: 'center',
  },
  section: {
    marginBottom: theme.spacing.l,
    borderLeftWidth: 3,
    borderLeftColor: theme.colors.primary,
    paddingLeft: theme.spacing.m,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginBottom: theme.spacing.s,
    textTransform: 'uppercase',
  },
  text: {
    ...theme.text.body,
    fontSize: 16,
    lineHeight: 24,
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: theme.spacing.m,
    marginHorizontal: theme.spacing.m,
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
});
