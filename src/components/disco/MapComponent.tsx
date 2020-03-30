import React, { Component } from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
export class MapComponent extends Component<{ isMarkerShown: boolean }, {}> {
    constructor(props: { isMarkerShown: boolean }) {
        super(props);
    }
    render() {
        const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap
                defaultCenter={{ lat: 18.568859, lng: 73.919548 }}
                defaultZoom={13}
            >
                <Marker
                    position={{ lat: 18.568859, lng: 73.919548 }}
                />
                <Marker
                    position={{ lat: 18.568860, lng: 73.919550 }}
                />
            </GoogleMap>
        )
        )
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapExample
                    containerElement={<div style={{ height: `500px`, width: '500px' }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        )
    }
}