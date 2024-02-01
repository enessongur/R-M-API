// src/redux/favoritesSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        favorites: []
    },
    reducers: {
        addFavorite: (state, action) => {
            // Favori karakter sayısını kontrol et
            if (state.favorites.length < 10) {
                state.favorites.push(action.payload);
            } else {
                alert("Favori karakter ekleme sayısını aştınız. Başka bir karakteri favorilerden çıkarmalısınız.");
            }
        },
        removeFavorite: (state, action) => {
            state.favorites = state.favorites.filter(character => character.id !== action.payload.id);
        },
    },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;