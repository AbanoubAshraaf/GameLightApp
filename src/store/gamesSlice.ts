// src/store/gamesSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '01964fa8-f0e5-40fc-a13b-9f5c3a5415f3';
const BASE_URL = 'https://mock-game-api-9a408f047f23.herokuapp.com/api';

export const fetchGames = createAsyncThunk('games/fetchGames', async () => {
  const response = await axios.get(`${BASE_URL}/games`, {
    headers: { 'X-API-Key': API_KEY },
  });
  return response.data;
});

export const fetchGameDetails = createAsyncThunk('games/fetchGameDetails', async (gameId) => {
  const response = await axios.get(`${BASE_URL}/games/${gameId}`, {
    headers: { 'X-API-Key': API_KEY },
  });
  return { gameId, data: response.data };
});

const gamesSlice = createSlice({
  name: 'games',
  initialState: {
    games: [],
    favourites: [],
    gameDetails: {},
    status: 'idle',
    error: null,
  },
  reducers: {
    toggleFavourite: (state, action) => {
      const game = action.payload;
      const isFavourite = state.favourites.find(fav => fav.id === game.id);
      if (isFavourite) {
        state.favourites = state.favourites.filter(fav => fav.id !== game.id);
      } else {
        state.favourites.push(game);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.games = action.payload;
      })
      .addCase(fetchGames.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchGameDetails.fulfilled, (state, action) => {
        console.log('action.payload',action.payload.data)
        state.gameDetails = action.payload.data;
      })
      .addCase(fetchGameDetails.rejected, (state, action) => {
        console.log('action.payload','isRejected')
      })
  },
});

export const { toggleFavourite } = gamesSlice.actions;
export default gamesSlice.reducer;
