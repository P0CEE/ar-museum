import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import InstructionScreen from '../screens/InstructionScreen';
import ARScreen from '../screens/ARScreen';
import DinosaurListScreen from '../screens/DinosaurListScreen';

import PrivacyScreen from '../screens/PrivacyScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen 
        name="Welcome" 
        component={WelcomeScreen} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Privacy" 
        component={PrivacyScreen} 
        options={{ title: 'Confidentialité' }} 
      />
      <Stack.Screen 
        name="Instructions" 
        component={InstructionScreen} 
        options={{ title: 'Instructions' }} 
      />
      <Stack.Screen 
        name="DinosaurList" 
        component={DinosaurListScreen} 
        options={{ title: 'Choisir un Dinosaure' }} 
      />
      <Stack.Screen 
        name="ARScreen" 
        component={ARScreen} 
        options={({ route }: any) => ({ 
          title: route.params?.dinoName || 'Scanner',
          headerTransparent: true,
          headerTintColor: '#fff',
        })} 
      />
    </Stack.Navigator>
  );
}
