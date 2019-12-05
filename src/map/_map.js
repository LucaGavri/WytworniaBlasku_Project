import React, { Component } from 'react';
import logoIcon from './../images/iconPin.png';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%',
};

export class MapContainer extends Component {
    state = {
        showingInfoWindow: true,  //Hides or the shows the infoWindow
        activeMarker: true,          //Shows the active marker upon click
        selectedPlace: true          //Shows the infoWindow to the selected place upon a marker
    };
    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={17}
                style={mapStyles}
                initialCenter={{
                    lat: 52.054890,
                    lng: 21.384434
                }}
            >
                <Marker
                    onClick={this.onMarkerClick}
                    name={'Wytwórnia Blasku Detailing & Wrap'}
                    icon={logoIcon}

                />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>

                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
})(MapContainer);