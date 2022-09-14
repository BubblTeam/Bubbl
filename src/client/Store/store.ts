import { configureStore } from '@reduxjs/toolkit';
import reducer from './Reducers/index';

const store = configureStore({
  reducer,
});

export default store;
