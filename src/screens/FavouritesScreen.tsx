// src/screens/FavouritesScreen.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { View, FlatList, Image, Text, Button } from 'react-native';
import { RootState } from '../store';
import { GamesCard } from '../components/mollecules/GameCard';

const FavouritesScreen = ({navigation}) => {
  const favourites = useSelector((state: RootState) => state.games.favourites);

  const renderItem = ({ item }) => (
    <GamesCard item={item} navigation={navigation}/>

  );

  return (
    <View>
      <FlatList data={favourites} renderItem={renderItem} keyExtractor={item => item.id.toString()} />
    </View>
  );
};

export default FavouritesScreen;
