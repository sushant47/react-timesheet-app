import React, { Component } from "react";
import { MessageCount } from "./MessageCount";
import { EmailCount } from "./EmailCount";
import { SearchProject } from "./SearchProject";
import data from '../../project-list.json';
import { MapComponent } from "./MapComponent";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { DisplayCount } from "./DisplayCounts";
export class DiscoDashboard extends Component {
    render() {
        console.log(data);
        const emailCounts = {
            emailSent: '1023',
            emailReceived: '1023'
        }
        const callCounts = {
            meetings: '52145',
            individual: '52145'
        }
        const messageCounts = {
            teamChatMessageCount: '1023',
            privateChatMessageCount: '1023'
        }
        const totalCounts = {
            message: messageCounts,
            email: emailCounts,
            call: callCounts
        }
        const mystyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
        };
        return (
            <div className="container">
                <div className="page-wrap">
                    <SearchProject projectList={data} filterName='1'/>
                </div>
                <div className="info">
                    <DisplayCount displayCount={totalCounts} />
                </div>
                <span className="data-update">Data updated as on : 29th Mar 2020</span>
                <div className="map">
                    <div className="mapouter">
                        <div className="gmap_canvas">
                            <div id="gmap_canvas" style={mystyle}>
                            <MapComponent isMarkerShown={true} />
                            </div>
                    </div>
                </div>
            </div>
            </div >
        )
    }
}