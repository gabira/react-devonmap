/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MarkerActions from '../../store/actions/marker';

import { Container } from './style';

const DevelopersList = props => (
  <Container modal={props.modalIsOpen}>
    <h2>Desenvolvedores</h2>
    <ul>
      {props.markers.map(marker => (
        <li key={marker.id}>
          <img src={marker.img} alt={marker.name} />
          <strong>{marker.name || 'Github user'}</strong>
          <small>
            <a href={marker.url || '#'} title="Ir para github">
              {marker.user}
            </a>
          </small>
          <button type="button" onClick={() => props.removeMarker(marker.id)}>
            x
          </button>
        </li>
      ))}
    </ul>
  </Container>
);

const mapStateToProps = state => ({
  markers: state.markers,
  modalIsOpen: state.modal.modalIsOpen,
});

const mapDispatchToProps = dispatch => bindActionCreators(MarkerActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DevelopersList);
