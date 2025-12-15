import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import InstructionScreen from '../screens/InstructionScreen';
import ARScreen from '../screens/ARScreen';

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
        name="Instructions" 
        component={InstructionScreen} 
        options={{ title: 'Instructions' }} 
      />
      <Stack.Screen 
        name="ARScreen" 
        component={ARScreen} 
        options={{ 
          title: 'Scanner',
          headerTransparent: true,
          headerTintColor: '#fff',
        }} 
      />
    </Stack.Navigator>
  );
}
