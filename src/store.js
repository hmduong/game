import { configureStore } from '@reduxjs/toolkit';
import { coupleReducer } from './features/couple';
import { nameReducer } from './features/name';
import { scoreReducer } from './features/score';

export default configureStore({
  reducer: {
    score: scoreReducer,
    name: nameReducer,
    couple: coupleReducer,
  },
});
