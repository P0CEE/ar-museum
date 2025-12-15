import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { theme } from '../theme';

// Simulate AR States
enum ARState {
  SCANNING = 'SCANNING', // Looking for planes (simulated)
  PLACING = 'PLACING',   // Plane found, waiting for user placement
  VIEWING = 'VIEWING',   // Model placed
}

const { width, height } = Dimensions.get('window');

export default function ARScreen({ route }: any) {
  const [permission, requestPermission] = useCameraPermissions();
  const { dinoName } = route.params || { dinoName: 'Inconnu' };
  
  const [arState, setArState] = useState<ARState>(ARState.SCANNING);
  const [modelPosition, setModelPosition] = useState<{x: number, y: number} | null>(null);

  // Simulate plane detection capability after a few seconds
  React.useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (arState === ARState.SCANNING) {
      timeout = setTimeout(() => {
        setArState(ARState.PLACING);
      }, 3000); 
    }
    return () => clearTimeout(timeout);
  }, [arState]);

  if (!permission) {
    return <View style={styles.container} />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Accès caméra requis pour la Réalité Augmentée</Text>
        <TouchableOpacity style={styles.button} onPress={requestPermission}>
            <Text style={styles.buttonText}>AUTORISER</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const handleCreateAnchor = () => {
    if (arState === ARState.PLACING) {
      setArState(ARState.VIEWING);
      // Simulate placing model at screen center
      setModelPosition({ x: width / 2, y: height / 2 });
    }
  };

  const handleReset = () => {
    setArState(ARState.SCANNING);
    setModelPosition(null);
  };

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing="back">
        
        {/* AR Overlay Layer */}
        <View style={styles.overlay}>
            
            {/* HUD: Top Info */}
            <View style={styles.topInfo}>
                {/* Text removed to avoid duplication with Header */}
            </View>

            {/* Reticule (Only in Scanning/Placing) */}
            {arState !== ARState.VIEWING && (
                <View style={[
                    styles.centerTarget,
                    arState === ARState.PLACING && styles.centerTargetActive
                ]}>
                    <View style={[
                        styles.crosshair,
                        arState === ARState.PLACING && styles.crosshairActive
                    ]} />
                </View>
            )}

            {/* Placed Model Placeholder */}
            {arState === ARState.VIEWING && modelPosition && (
                <View style={styles.modelPlaceholder}>
                    <Text style={styles.modelText}>🦖</Text>
                    <Text style={styles.modelLabel}>Visionneuse 3D</Text>
                </View>
            )}

            {/* Contextual Instructions */}
            <View style={styles.bottomControls}>
                <View style={styles.instructionContainer}>
                    <Text style={styles.instructionText}>
                        {arState === ARState.SCANNING && "Déplacez votre téléphone lentement..."}
                        {arState === ARState.PLACING && "Appuyez sur PLACER pour valider"}
                        {arState === ARState.VIEWING && "Observez le dinosaure sous tous les angles"}
                    </Text>
                </View>

                {/* Actions */}
                <View style={styles.actionRow}>
                   {arState === ARState.PLACING && (
                        <TouchableOpacity style={styles.actionButton} onPress={handleCreateAnchor}>
                            <Text style={styles.actionButtonText}>PLACER</Text>
                        </TouchableOpacity>
                   )}
                   
                   <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
                        <Text style={styles.resetButtonText}>RESET</Text>
                   </TouchableOpacity>
                </View>
            </View>

        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
  },
  camera: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'space-between',
    padding: theme.spacing.m,
  },
  message: {
    color: theme.colors.white,
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 16,
  },
  
  // Top Info
  // Top Info
  topInfo: {
    paddingTop: 60,
    alignItems: 'center',
  },
  dinoName: {
    ...theme.text.title,
    color: theme.colors.white,
    fontSize: 24,
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowRadius: 4,
    marginBottom: 8,
  },
  
  // Reticule / Crosshair
  centerTarget: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -100, // Half of height
    marginLeft: -100, // Half of width
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 20, // Slight rounding for "tech" feel, or 0 for sharp
  },
  centerTargetActive: {
    borderColor: theme.colors.accent,
    borderWidth: 2,
  },
  crosshair: {
    width: 20,
    height: 20,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
  },
  crosshairActive: {
    borderColor: theme.colors.accent,
    backgroundColor: 'transparent',
  },

  // Model Placeholder
  modelPlaceholder: {
    position: 'absolute',
    top: '50%',
    marginTop: -75,
    alignSelf: 'center',
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modelText: {
    fontSize: 60,
  },
  modelLabel: {
    color: theme.colors.white,
    marginTop: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 8,
  },


  // Bottom Controls
  bottomControls: {
    marginBottom: 40,
    alignItems: 'center',
  },
  instructionContainer: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 12,
    marginBottom: 20,
    borderLeftWidth: 3,
    borderLeftColor: theme.colors.accent,
  },
  instructionText: {
    color: theme.colors.white,
    fontSize: 16,
    fontWeight: '600',
  },

  // Actions
  actionRow: {
    flexDirection: 'row',
    gap: 20,
  },
  actionButton: {
    backgroundColor: theme.colors.accent,
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderWidth: 2,
    borderColor: theme.colors.white,
  },
  actionButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1.5,
    color: '#000',
  },
  resetButton: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.5)',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  resetButtonText: {
    color: theme.colors.white,
    fontSize: 14,
    fontWeight: 'normal',
  },
  
  // Permission Button
  button: {
      backgroundColor: theme.colors.primary,
      padding: theme.spacing.m,
  },
  buttonText: {
      color: theme.colors.white,
      fontWeight: 'bold',
  }

});
