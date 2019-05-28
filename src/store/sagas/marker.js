/* eslint-disable import/prefer-default-export */
import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { addMarkerSuccess, addMarkerFailure } from '../actions/marker';

export function* addMarker(action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.user}`);

    yield put(
      addMarkerSuccess({
        id: data.id,
        user: data.login,
        name: data.name,
        img: data.avatar_url,
        url: data.html_url,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
      }),
    );
  } catch (err) {
    yield put(addMarkerFailure('Usuário não encontrado'));
  }
}
