/* eslint-disable no-case-declarations */
/* eslint-disable no-shadow */
import { toast } from 'react-toastify';

const INITIAL_STATE = [
  {
    id: 1,
    name: 'Gabriel Silveira',
    user: 'gabira',
    img: 'https://avatars0.githubusercontent.com/u/5270062?s=460&v=4',
    latitude: -15.826412035052607,
    longitude: -47.926255308763004,
  },
];

export default function marker(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_MARKER_SUCCESS':
      toast.success('Usuário cadastrado com sucesso', { autoClose: 2000 });
      return [...state, action.payload.marker];
    case 'ADD_MARKER_FAILURE':
      toast.error(action.payload.error, { autoClose: 2000 });
      return state;
    case 'REMOVE_MARKER':
      toast.info('Usuário removido com sucesso', { autoClose: 1500 });
      return state.filter(marker => marker.id !== action.payload.id);
    default:
      return state;
  }
}
