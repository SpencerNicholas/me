import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from '../components/navigation/navigation';
import responsiveReducer from '../components/redux/responsiveSlice';
import experienceReducer from '../components/redux/experienceSlice';
import portfolioReducer from '../components/redux/portfolioSlice';

export default configureStore({
  reducer: {
    navigation: navigationReducer,
    responsive: responsiveReducer,
    experience: experienceReducer,
    portfolio: portfolioReducer,
  },
});