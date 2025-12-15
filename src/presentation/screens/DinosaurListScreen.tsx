import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { theme } from '../theme';

// Mock Data for Dinosaurs
const DINOSAURS = [
  { id: 't-rex', name: 'Tyrannosaurus Rex', period: 'Crétacé', type: 'Carnivore' },
  { id: 'triceratops', name: 'Triceratops', period: 'Crétacé', type: 'Herbivore' },
  { id: 'velociraptor', name: 'Velociraptor', period: 'Crétacé', type: 'Carnivore' },
  { id: 'brachiosaurus', name: 'Brachiosaurus', period: 'Jurassique', type: 'Herbivore' },
  { id: 'stegosaurus', name: 'Stegosaurus', period: 'Jurassique', type: 'Herbivore' },
];

export default function DinosaurListScreen({ navigation }: any) {
  const renderItem = ({ item }: any) => (
    <TouchableOpacity 
      style={styles.card}
      onPress={() => navigation.navigate('ARScreen', { dinoId: item.id, dinoName: item.name })}
    >
      <View style={styles.cardContent}>
        <View style={styles.textContainer}>
          <Text style={styles.dinoName}>{item.name}</Text>
          <Text style={styles.dinoDetails}>{item.period} • {item.type}</Text>
        </View>
        <View style={styles.arrowContainer}>
          <Text style={styles.arrow}>→</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Nos Dinosaures</Text>
      <FlatList
        data={DINOSAURS}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingTop: 50, // Safe area padding
  },
  headerTitle: {
    ...theme.text.title,
    textAlign: 'center',
    marginBottom: theme.spacing.l,
    marginTop: theme.spacing.l,
  },
  listContainer: {
    paddingHorizontal: theme.spacing.m,
    paddingBottom: theme.spacing.xl,
  },
  card: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.layout.borderRadius,
    marginBottom: theme.spacing.m,
    padding: theme.spacing.m,
    borderLeftWidth: 6,
    borderLeftColor: theme.colors.primary,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  dinoName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 4,
  },
  dinoDetails: {
    fontSize: 14,
    color: theme.colors.secondary,
  },
  arrowContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    fontSize: 24,
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
});
