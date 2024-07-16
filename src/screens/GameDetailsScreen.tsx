// src/screens/GameDetailsScreen.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, Image, Button } from 'react-native';
import { fetchGameDetails, toggleFavourite } from '../store/gamesSlice';
import { RootState } from '../store';
import { ScrollView } from 'react-native-gesture-handler';
import { FavouriteIcon } from '../components/atoms/FavouriteIcon';

const GameDetailsScreen = ({ route }) => {
  const { gameId } = route.params;
  const dispatch = useDispatch();
  const gameDetails = useSelector((state: RootState) => state.games.gameDetails);
  const favourites = useSelector((state: RootState) => state.games.favourites);

  const isFavourite = (item) => {
    return favourites.some(fav => fav.id === item.id);
  };

  useEffect(() => {
    dispatch(fetchGameDetails(gameId));
    console.log({gameId})
  }, [dispatch, gameId]);
  if (!gameDetails) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView>
      <Image source={{ uri: gameDetails.bannerURL }} style={{ width: '100%', height: 200 }} />
      <Image source={{ uri: gameDetails.iconURL }} style={{ width: 50, height: 50,alignSelf:'center',marginTop:-25 }} />
      <Text>{gameDetails.title}</Text>
      <Text>{gameDetails.description}</Text>
      <Text>{gameDetails.rating}</Text>
      <Button title="Favourite" onPress={() => dispatch(toggleFavourite(gameDetails))} />
        <View style={{position:'absolute', padding: 10,alignSelf:'flex-end'}}>
        <FavouriteIcon onPress={() => dispatch(toggleFavourite(gameDetails))} isFavourite={isFavourite(gameDetails)}/>
        </View>
    </ScrollView>
  );
};

export default GameDetailsScreen;
