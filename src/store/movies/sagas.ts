import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { MoviesActionTypes } from './types';
import { fetchError, fetchSuccess } from './actions';
import { callAPI } from 'utils/call-api';

const API_ENDPOINT = process.env.REACT_APP_OMDB_API_ENDPOINT || 'http://www.omdbapi.com';
const API_KEY = process.env.REACT_APP_OMDB_KEY;

function* handleFetch() {
  try {
    // Prepicked array of popular movies by IMDB ids
    const movieParams = [
      'tt11024272',
      'tt6723592',
      'tt1375666',
      'tt1950186',
      'tt4566758',
      'tt11464826',
      'tt7939766',
      'tt0073486',
      'tt0468569',
      'tt0068646',
      'tt0111161',
      'tt8503618',
      'tt0816692',
      'tt6751668',
      'tt4154796',
      'tt4154756',
      'tt0088763',
      'tt0993846',
    ];

    // To call async functions, use redux-saga's `call()`.
    const responses = yield all(
      movieParams.map((p) => call(callAPI, 'GET', API_ENDPOINT, { i: p, apikey: API_KEY })),
    );

    if (responses.error) {
      yield put(fetchError(responses.error));
    } else {
      yield put(fetchSuccess(responses));
    }
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(fetchError(err.stack));
    } else {
      yield put(fetchError('An unknown error occured.'));
    }
  }
}

function* watchFetchRequest() {
  yield takeEvery(MoviesActionTypes.FETCH_REQUEST, handleFetch);
}

function* moviesSaga() {
  yield all([fork(watchFetchRequest)]);
}

export default moviesSaga;
