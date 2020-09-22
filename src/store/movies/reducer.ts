import { Reducer } from 'redux';
import { MoviesActionTypes, MoviesState } from './types';

// Type-safe startingState!
export const startingState: MoviesState = {
  data: [],
  errors: undefined,
  loading: false,
};

const reducer: Reducer<MoviesState> = (state = startingState, action) => {
  switch (action.type) {
    case MoviesActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case MoviesActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload };
    }
    case MoviesActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer as moviesReducer };
