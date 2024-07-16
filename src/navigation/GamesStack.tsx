// src/navigation/AppNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GamesScreen from '../screens/GamesScreen';
import GameDetailsScreen from '../screens/GameDetailsScreen';

const Stack = createStackNavigator();

export function GamesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Games" component={GamesScreen} />
      <Stack.Screen name="GameDetails" component={GameDetailsScreen} />
    </Stack.Navigator>
  );
}


