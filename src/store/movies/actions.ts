import { IOMDBMoviesByIMDB, MoviesActionTypes } from './types';

export const fetchRequest = () => ({
  type: MoviesActionTypes.FETCH_REQUEST,
});

export const fetchSuccess = (data: IOMDBMoviesByIMDB[]) => ({
  type: MoviesActionTypes.FETCH_SUCCESS,
  payload: data,
});

export const fetchError = (message: string) => ({
  type: MoviesActionTypes.FETCH_ERROR,
  payload: message,
});
