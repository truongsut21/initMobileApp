import { configureStore } from '@reduxjs/toolkit';
import userSlice from './reducer/user';


const combinedReducer = {
  user: userSlice,

};

export default configureStore({
  reducer: combinedReducer,
});
