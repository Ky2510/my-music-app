// import axios from 'axios';
// import { Dispatch } from 'redux';
// import { FETCH_GENRES_REQUEST, FETCH_GENRES_SUCCESS, FETCH_GENRES_FAILURE } from '../types/index';

// const apiUrl = 'http://127.0.0.1:8000/api/genre';

// export const fetchGenres = () => {
//   return async (dispatch: Dispatch) => {
//     dispatch({ type: FETCH_GENRES_REQUEST });

//     try {
//       const response = await axios.get(apiUrl);
//       dispatch({
//         type: FETCH_GENRES_SUCCESS,
//         payload: response.data,
//       });
//     } catch (error) {
//       dispatch({
//         type: FETCH_GENRES_FAILURE,
//         payload: error.message,
//       });
//     }
//   };
// };
