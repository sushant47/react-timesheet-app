import React, { Component, useState } from "react";
import GoogleMapReact from 'google-map-react';
export class MapComponent extends Component<{ isMarkerShown: boolean }, {}> {
    constructor(props: { isMarkerShown: boolean }) {
        super(props);
    }
    render() {
        // const [center] = [{ lat: 11.0168, lng: 76.9558 }];
        // const [zoom, setZoom] = useState(11);
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                {/* <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyC8tcqjgC5lyjYlhp0B_PtUWCMER8UxcPw' }}
                    defaultCenter={center}
                    defaultZoom={zoom}
                >
                </GoogleMapReact> */}
            </div>
        )
    }
}