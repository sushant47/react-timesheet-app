import React, { Component } from "react";
import { emailContent } from "../../interfaces/Interface";

interface emails {
    email: emailContent;
}
export class EmailCount extends Component<emails, {}> {

    constructor(props: emails) {
        super(props);
    }
    componentDidMount() {

    }
    render() {
        return (
            <ul>
                <li>
                    <span>{this.props.email.emailSent}</span>
                    <span>Sent</span>
                </li>
                <li>
                    <span>{this.props.email.emailReceived}</span>
                    <span>Received</span>
                </li>
            </ul>
        )
    }
}