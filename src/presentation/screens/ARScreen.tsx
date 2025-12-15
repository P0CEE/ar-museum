import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { theme } from '../theme';

export default function ARScreen({ route }: any) {
  const [permission, requestPermission] = useCameraPermissions();
  const { dinoName } = route.params || { dinoName: 'Inconnu' };

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Nous avons besoin de votre permission pour utiliser la caméra</Text>
        <Button onPress={requestPermission} title="Accorder la permission" color={theme.colors.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing="back">
        <View style={styles.overlay}>
          <Text style={styles.overlayText}>Recherche : {dinoName}</Text>
          <View style={styles.scannerFrame} />
          <Text style={styles.hintText}>Placez la caméra face au sol</Text>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
    color: theme.colors.white,
  },
  camera: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayText: {
    color: theme.colors.accent,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  scannerFrame: {
    width: 280,
    height: 280,
    borderWidth: 3,
    borderColor: theme.colors.white,
    borderRadius: 20,
    borderStyle: 'dashed',
  },
  hintText: {
    marginTop: 20,
    color: theme.colors.white,
    fontSize: 16,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 8,
    borderRadius: 8,
  }
});
