import React, { Component } from "react";

export class Conditonal extends Component<{ isLoading: boolean }> {
    constructor(props: { isLoading: boolean }) {
        super(props);
    }
    render() {
        return (
            <div>
                {this.props.isLoading ? <h1>Loading...</h1> : <h1>Hello</h1>}
            </div>
        )
    }
}
export default Conditonal;