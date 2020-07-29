import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from '../components/navigation/navigation';
import responsiveReducer from '../components/responsive/responsiveSlice';

export default configureStore({
  reducer: {
    navigation: navigationReducer,
    responsive: responsiveReducer,
  },
});