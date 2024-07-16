// src/navigation/AppNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import FavouritesScreen from '../screens/FavouritesScreen';
import { GamesStack } from './GamesStack';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Games" component={GamesStack} />
      <Tab.Screen name="Favourites" component={FavouritesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
