import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface emails {
    email: emailContent;
}
interface emailContent {
    emailSent: string;
    emailReceived: string;
}
export class EmailCount extends Component<emails, {}> {

    constructor(props: emails) {
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
                    Emails Sent
                    <p />{this.props.email.emailSent}
                        </Col>
                        <Col>
                            <label />
                    Emails Received
                    <p />{this.props.email.emailReceived}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}