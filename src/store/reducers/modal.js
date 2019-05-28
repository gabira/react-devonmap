const INITIAL_STATE = {
  modalIsOpen: false,
  coordinates: null,
};

export default function modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        modalIsOpen: true,
        coordinates: action.payload.coordinates,
      };
    case 'CLOSE_MODAL':
      return {
        modalIsOpen: false,
        coordinates: null,
      };
    default:
      return state;
  }
}
