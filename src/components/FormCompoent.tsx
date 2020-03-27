import React, { Component } from "react";

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
interface formProps {
    data: formStructure
    handleChange: (event: any) => void;
}
export class FormComponent extends Component<formProps, formStructure> {
    constructor(props: formProps) {
        super(props);
        // this.state = {
        //     firstName: '',
        //     lastName: '',
        //     age: '',
        //     gender: '',
        //     destination: '',
        //     isVegan: false,
        //     isKosher: false,
        //     isLactoseFree: false
        // }
    }
    render() {
        console.log(this.props);
        return (
                <main>
                    <form>
                        <input type='text' name='firstName' value={this.props.data.firstName} onChange={this.props.handleChange}></input>
                        <br />
                        <input type='text' name='lastName' value={this.props.data.lastName} onChange={this.props.handleChange as any}></input>
                        <br />
                        <input type='text' name='age' value={this.props.data.age} onChange={this.props.handleChange as any}></input>
                        <br />
                        <label>
                            <input type='radio'
                                name='gender'
                                value='male'
                                checked={this.props.data.gender === 'male'}
                                onChange={this.props.handleChange as any} />
                    Male
                <br />
                            <input type='radio'
                                name='gender'
                                value='female'
                                checked={this.props.data.gender === 'female'}
                                onChange={this.props.handleChange as any} />
                    Female
                    <br />
                        </label>
                        <select value={this.props.data.destination} name='destination' onChange={this.props.handleChange as any}>
                            <option value=''>Please choose a destination</option>
                            <option value='germany'>Germany</option>
                            <option value='norway'>Norway</option>
                            <option value='north pole'>North pole</option>
                            <option value='south pole'>South pole</option>
                        </select>
                        <br />
                        <label>
                            <input type='checkbox'
                                name='isVegan'
                                onChange={this.props.handleChange as any}
                                checked={this.props.data.isVegan} />
                            Vegan ?
                    </label>
                        <br />
                        <label>
                            <input type='checkbox'
                                name='isKosher'
                                onChange={this.props.handleChange as any}
                                checked={this.props.data.isKosher} />
                            Kosher ?
                    </label>
                        <br />
                        <label>
                            <input type='checkbox'
                                name='isLactoseFree'
                                onChange={this.props.handleChange as any}
                                checked={this.props.data.isLactoseFree} />
                            LactoseFree ?
                    </label>
                        <button>Submit</button>
                    </form>
                    <hr />
                    <h2>Entered Information</h2>
                    <p>Your name: {this.props.data.firstName} {this.props.data.lastName}</p>
                    <p>Your age: {this.props.data.age}</p>
                    <p>Your gender: {this.props.data.gender}</p>
                    <p>Your destination: {this.props.data.destination}</p>
                    <p>Your dietary restrictions: </p>
                    <p>is Vegan {this.props.data.isVegan ? 'yes' : 'no'}</p>
                    <p>is Kosher {this.props.data.isKosher ? 'yes' : 'no'}</p>
                    <p>is Lactose Free {this.props.data.isLactoseFree ? 'yes' : 'no'}</p>
                </main>
        )
    }
}