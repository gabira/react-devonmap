import React, { Component } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ModalActions from '../../store/actions/modal';

import DevelopersList from '../../components/DevelopersList';
import MyModal from '../../components/MyModal';

import 'mapbox-gl/dist/mapbox-gl.css';
import markerStyle from './style';

class Map extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -15.826412035052607,
      longitude: -47.926255308763004,
      zoom: 14,
    },
  };

  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  handleMapClick = e => {
    const [longitude, latitude] = e.lngLat;

    this.props.openModal({ latitude, longitude });

    // alert(`Latitude: ${latitude} \nLongitude: ${longitude}`);
  };

  render() {
    console.tron.log(this.props);
    return (
      <>
        <MyModal />
        <DevelopersList />
        <MapGL
          {...this.state.viewport}
          onClick={this.handleMapClick}
          mapStyle="mapbox://styles/mapbox/basic-v9"
          mapboxApiAccessToken={
            'pk.eyJ1IjoiZ2FycnNpbHZlaXJhIiwiYSI6ImNqbDJwemt0czF0OTUza3BncWRkc2JmcDEifQ.hN_z4adTssAp2KNRUW5UpQ'
          }
          onViewportChange={viewport => this.setState({ viewport })}
        >
          {this.props.markers.map(marker => (
            <Marker key={marker.id} latitude={marker.latitude} longitude={marker.longitude}>
              <img style={markerStyle} src={marker.img} alt={marker.name} />
            </Marker>
          ))}
        </MapGL>
      </>
    );
  }
}

const mapStateToProps = state => ({
  markers: state.markers,
});

const mapDispatchToProps = dispatch => bindActionCreators(ModalActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
