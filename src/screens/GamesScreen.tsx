// src/screens/GamesScreen.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, FlatList, Button, Image, Pressable } from 'react-native';
import { fetchGames, toggleFavourite } from '../store/gamesSlice';
import { RootState } from '../store';
import { FontAwesome } from '@expo/vector-icons';
import { GamesCard } from '../components/mollecules/GameCard';

const GamesScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const games = useSelector((state: RootState) => state.games.games);
  const status = useSelector((state: RootState) => state.games.status);


  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  const renderItem = ({ item }) => (
    <GamesCard item={item} navigation={navigation}/>

  );

  return (
    <View>
      {status === 'loading' && <Text>Loading...</Text>}
      {status === 'succeeded' && (
        <FlatList data={games} renderItem={renderItem} keyExtractor={item => item.id.toString()} />
      )}
      {status === 'failed' && <Text>Error loading games</Text>}
    </View>
  );
};

export default GamesScreen;
