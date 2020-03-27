import React, { Component } from "react";
import { FormComponent } from "./FormCompoent";

interface formStructure {
    firstName: string;
    lastName: string;
    age: string;
    gender: string;
    destination: string;
    isVegan: false,
    isKosher: false,
    isLactoseFree: false
}

export class TravelForm extends Component<{}, formStructure> {
    constructor(props: {}) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            destination: '',
            isVegan: false,
            isKosher: false,
            isLactoseFree: false
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event: any) {
        const { name, value, type, checked } = event.target;
        type === 'checkbox' ?
            this.setState({
                [name]: checked
            } as any

            ) :
            this.setState({ [name]: value } as any);
    }
    render() {
        let restrictions;
        // for (let i in this.state.dietaryRestrictions as any) {
        //     console.log(this.state.dietaryRestrictions[i])
        // }
        return (
            <FormComponent handleChange={this.handleChange} data={this.state}/>
        )
    }
} 