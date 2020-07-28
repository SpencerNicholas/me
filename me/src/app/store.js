import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from '../components/navigation';

export default configureStore({
  reducer: {
    navigation: navigationReducer,
  },
});