import React, { Component } from "react";
import { EmailCount } from "./EmailCount";
import { CallCount } from "./CallCount";
import { MessageCount } from "./MessageCount";
import { messageContent, emailContent, callContent } from "../../interfaces/Interface";

interface displayCount {
    displayCount: displayItems
}
interface displayItems {
    message: messageContent;
    email: emailContent;
    call: callContent;
}
export class DisplayCount extends Component<displayCount, {}> {

    constructor(props: displayCount) {
        super(props);
    }
    componentDidMount() {

    }
    render() {
        return (
            <ul>
                <li className="chats">
                    <h3><i className="icon icon-chat-bubble-two"></i> Chats</h3>
                    <MessageCount message={this.props.displayCount.message} />
                </li>
                <li className="chats">
                    <h3><i className="icon icon-email"></i> Emails</h3>
                    <EmailCount email={this.props.displayCount.email} />
                </li>

                <li className="chats">
                    <h3><i className="icon icon-ios-telephone-outline"></i> Calls</h3>
                    <CallCount call={this.props.displayCount.call} />
                </li>
            </ul>
        )
    }
}