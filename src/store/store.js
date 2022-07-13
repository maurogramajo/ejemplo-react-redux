import { configureStore } from '@reduxjs/toolkit';
import questionsReducer from '../reducers/questions';
let store = configureStore({reducer: questionsReducer});

export default store;