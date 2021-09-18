import {configureStore} from '@reduxjs/toolkit';
import albumSlice from '../features/album/albumSlice';

export const store = configureStore({
  reducer: {
    album: albumSlice,
  },
});
