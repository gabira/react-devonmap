import { all, takeLatest } from 'redux-saga/effects';

import { addMarker } from './marker';

export default function* rootSaga() {
  yield all([takeLatest('ADD_MARKER_REQUEST', addMarker)]);
}
