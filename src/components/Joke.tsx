import React, { Component } from 'react';

interface Jokes {
    question: string;
    punchLine: string;
}
export class Joke extends Component<Jokes> {
    constructor(props: Jokes) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3 style={{ display: this.props.question ? "block" : "none" }}>
                    Question:
                </h3>
                <h3>
                    Answer:
                </h3>
            </div>
        )
    }
}
export default Joke;