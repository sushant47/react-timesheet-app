import React, { Component } from "react";

interface starWars {
    loading: boolean;
    character: any;
}
export class Starwars extends Component<{}, starWars> {
    constructor(props: {}) {
        super(props);
        this.state = {
            loading: true,
            character: {}
        }
    }
    componentDidMount() {

        fetch('https://swapi.co/api/people/1')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    character: data
                })
            })
    }
    render() {
        const starWars = this.state.loading ? 'Loading....' : this.state.character.name
        return (
            <div>
                {starWars}
            </div>
        )
    }
}