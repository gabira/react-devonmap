/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ModalActions from '../../store/actions/modal';
import * as MarkerActions from '../../store/actions/marker';

import { Form, customStyles } from './style';

class MyModal extends Component {
  state = {
    userInput: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.userInput.length)
      this.props.addMarkerRequest({
        user: this.state.userInput,
        coordinates: this.props.coordinates,
      });
    else alert('O nome do usuário não foi informado');

    this.handleCancel();
  };

  handleInputChange = e => {
    this.setState({ userInput: e.target.value });
  };

  handleCancel = e => {
    this.props.closeModal();
    this.setState({ userInput: '' });
  };

  render() {
    return (
      <Modal
        isOpen={this.props.modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <Form onSubmit={this.handleSubmit}>
          <h3>Adicionar usuário</h3>
          <input
            type="text"
            name="user"
            id="user"
            placeholder="Usuário do Github"
            onChange={this.handleInputChange}
          />
          <button type="submit">Add</button>
          <button type="button" onClick={this.handleCancel}>
            Cancelar
          </button>
        </Form>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  modalIsOpen: state.modal.modalIsOpen,
  coordinates: state.modal.coordinates,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...ModalActions, ...MarkerActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyModal);
