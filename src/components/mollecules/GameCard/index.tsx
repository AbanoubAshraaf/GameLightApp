// src/screens/GamesScreen.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, FlatList, Button, Image, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { RootState } from '../../../store';
import { fetchGames, toggleFavourite } from '../../../store/gamesSlice';
import { FavouriteIcon } from '../../atoms/FavouriteIcon';

export const GamesCard = ({ item, navigation }) => {
    const dispatch = useDispatch();
    const favourites = useSelector((state: RootState) => state.games.favourites);

    const isFavourite = (item) => {
        return favourites.some(fav => fav.id === item.id);
    };


    return (
        <View style={{ borderWidth: 1, marginHorizontal: 10, marginVertical: 5, borderRadius: 5, padding: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Image source={{ uri: item.iconURL }} style={{ width: 50, height: 50 }} />
                <View>
                    <Text>{item.title}</Text>
                    <Text>{item.rating}</Text>
                </View>
                <FavouriteIcon isFavourite={isFavourite(item)} onPress={() => dispatch(toggleFavourite(item))} />
            </View>
            <Button title="Details" onPress={() => navigation.navigate('GameDetails', { gameId: item.id })} />
        </View>
    );


};

