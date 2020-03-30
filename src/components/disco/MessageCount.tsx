import React, { Component } from "react";
import { messageContent } from "../../interfaces/Interface";

interface messages {
    message: messageContent;
}
export class MessageCount extends Component<messages, {}> {

    constructor(props: messages) {
        super(props);
    }
    componentDidMount() {

    }
    render() {
        return (
            <ul>
                <li>
                    <span>52145</span>
                    <span>Teams</span>
                </li>
                <li>
                    <span>52145</span>
                    <span>Individual</span>
                </li>
            </ul>
        )
    }
}