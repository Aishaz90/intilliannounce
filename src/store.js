import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './authReducer';
import languageReducer from './languages/languageSlice'
import favoritesReducer from './favoritesSlice'
export default configureStore({
  reducer: {
    auth: authReducer,
    language: languageReducer,
    favorites: favoritesReducer
  }
});