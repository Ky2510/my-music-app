// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import { useDispatch } from 'react-redux';
// import genreReducer from '../store/reducers/index';
// import thunk from 'redux-thunk';

// const store = configureStore({
//   reducer: {
//     genre: genreReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false, // Disable serializable check if needed
//     }).concat(thunk),
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export const useAppDispatch = () => useDispatch<AppDispatch>();

// export default store;
