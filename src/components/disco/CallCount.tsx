import React, { Component } from "react";
import { callContent } from "../../interfaces/Interface";

interface calls {
    call: callContent;
}
export class CallCount extends Component<calls, {}> {

    constructor(props: calls) {
        super(props);
    }
    componentDidMount() {

    }
    render() {
        return (
            <ul>
                <li>
                    <span>52145</span>
                    <span>Meetings</span>
                </li>
                <li>
                    <span>52145</span>
                    <span>Individual</span>
                </li>
            </ul>
        )
    }
}