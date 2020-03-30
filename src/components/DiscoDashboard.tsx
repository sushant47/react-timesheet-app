import React, { Component } from "react";
import { MessageCount } from "./MessageCount";
import { EmailCount } from "./EmailCount";
import { SearchProject } from "./SearchProject";
import data from '../project-list.json';
import { MapComponent } from "./MapComponent";
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
export class DiscoDashboard extends Component {
    render() {
        console.log(data);
        const messageCounts = {
            teamChatMessageCount: '1023',
            privateChatMessageCount: '1023',
            callCount: '1023',
            meetingCount: '1023'
        }
        const emailCounts = {
            emailSent: '1023',
            emailReceived: '1023'
        }
        const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap
                defaultCenter={{ lat: 18.543411199999998, lng: 73.8656256 }}
                defaultZoom={13}
            >
                <Marker
                    position={{ lat: 18.543411199999998, lng: 73.8656256 }}
                />
            </GoogleMap>
        ));
        return (
            <div>
                <MessageCount message={messageCounts} />
                <br />
                <EmailCount email={emailCounts} />
                <br />
                <SearchProject projectList={data} />
                <br />
                <GoogleMapExample
                    containerElement={<div style={{ height: `500px`, width: '500px' }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
                <MapComponent isMarkerShown={true} />
            </div>
        )
    }
}