export const openModal = coordinates => ({
  type: 'OPEN_MODAL',
  payload: { coordinates },
});

export const closeModal = () => ({
  type: 'CLOSE_MODAL',
});
