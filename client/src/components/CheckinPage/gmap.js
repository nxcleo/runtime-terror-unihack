import React, { Component } from 'react';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%',
    "border-top-left-radius": "20px",
    "border-top-right-radius": "20px",
    "border-bottom-left-radius": "20px",
    "border-bottom-right-radius": "20px"
};

export class MapContainer extends Component {
    render() {
        console.log(this.props.place_data.loc);
        return (
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={this.props.place_data.loc}
            >
                <Marker position={this.props.place_data.loc} />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'maps-api-key'
})(MapContainer);
