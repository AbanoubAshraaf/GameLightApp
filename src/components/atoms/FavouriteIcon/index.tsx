// src/screens/GamesScreen.tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export const FavouriteIcon = ({ onPress, isFavourite }) => {
  return (
    <Pressable title="Favourite" onPress={onPress} >
      <FontAwesome name={isFavourite ? "heart" : "heart-o"} size={24} color="red" />
    </Pressable>
  );


};

