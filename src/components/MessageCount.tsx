import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

interface messages {
    message: messageContent;
}
interface messageContent {
    teamChatMessageCount: string;
    privateChatMessageCount: string;
    callCount: string;
    meetingCount: string;
}
export class MessageCount extends Component<messages, {}> {

    constructor(props: messages) {
        super(props);
    }
    componentDidMount() {

    }
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <label />
                    Team Chat Message Count
                    <p />{this.props.message.teamChatMessageCount}
                        </Col>
                        <Col>
                            <label />
                    Private Chat Message Count
                    <p />{this.props.message.privateChatMessageCount}
                        </Col>
                        <Col>
                            <label />
                Call Count
                <p />{this.props.message.callCount}
                        </Col>
                        <Col>
                            <label />
                    Meeting Count
                    <p />{this.props.message.meetingCount}
                        </Col>
                        <Col>
                            <DropdownButton id="dropdown-item-button" title="Dropdown button">
                                <Dropdown.Item as="button">Last 7 days</Dropdown.Item>
                                <Dropdown.Item as="button">Last 30 days</Dropdown.Item>
                                <Dropdown.Item as="button">Select Dates</Dropdown.Item>
                            </DropdownButton>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}