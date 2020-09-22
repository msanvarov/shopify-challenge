// Response object for GET movie by IMDB
// http://www.omdbapi.com/?i=tt1375666
export interface IOMDBMoviesByIMDB extends ApiResponse {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: IRating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

export interface IRating {
  Source: string;
  Value: string;
}

export type ApiResponse = Record<string, any>;

export enum MoviesActionTypes {
  FETCH_REQUEST = '@@movies/FETCH_REQUEST',
  FETCH_SUCCESS = '@@movies/FETCH_SUCCESS',
  FETCH_ERROR = '@@movies/FETCH_ERROR',
}

// state-with-type-level-immutability
export interface MoviesState {
  readonly loading: boolean;
  readonly data: IOMDBMoviesByIMDB[];
  readonly errors?: string;
}
