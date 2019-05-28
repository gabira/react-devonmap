export const addMarkerRequest = data => ({
  type: 'ADD_MARKER_REQUEST',
  payload: {
    user: data.user,
    latitude: data.coordinates.latitude,
    longitude: data.coordinates.longitude,
  },
});

export const addMarkerSuccess = marker => ({
  type: 'ADD_MARKER_SUCCESS',
  payload: { marker },
});

export const addMarkerFailure = error => ({
  type: 'ADD_MARKER_FAILURE',
  payload: { error },
});

export const removeMarker = id => ({
  type: 'REMOVE_MARKER',
  payload: { id },
});
