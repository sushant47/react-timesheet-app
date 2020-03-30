import React, { Component } from "react";

interface form { firstName: string; lastName: string; friendly: boolean; gender: string; favColor: string; }
export class Form extends Component<{}, form>{
    constructor(props: {}) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            friendly: true,
            gender: '',
            favColor: 'blue'
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event: any) {
        const { name, value, type, checked } = event.target;
        type === 'checkbox' ? this.setState({ [name]: checked } as any) : this.setState({ [name]: value } as any);
    }
    render() {
        return (
            <form>
                <input type='text' name='firstName' value={this.state.firstName} onChange={this.handleChange}></input>
                <h1>{this.state.firstName}</h1>
                <br />
                <input type='text' name='lastName' value={this.state.lastName} onChange={this.handleChange}></input>
                <h1>{this.state.lastName}</h1>
                <textarea value={'default value'} onChange={this.handleChange} />
                <br />
                <input type='checkbox'
                    name='friendly'
                    checked={this.state.friendly}
                    onChange={this.handleChange} />
                    Is Friendly?
                <br />
                <input type='radio'
                    name='gender'
                    value='male'
                    checked={this.state.gender === 'male'}
                    onChange={this.handleChange} />
                    Male
                <br />
                <input type='radio'
                    name='gender'
                    value='female'
                    checked={this.state.gender === 'female'}
                    onChange={this.handleChange} />
                    Female
                    <br />
                <select value={this.state.favColor}
                    onChange={this.handleChange}
                    name='favColor'>
                    <option value='blue'>Blue</option>
                    <option value='green'>Green</option>
                    <option value='red'>Red</option>
                </select>
                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <h2>You are a {this.state.gender}</h2>
                <h2>your favourite color is {this.state.favColor}</h2>
                <button>Submit</button>
            </form>
        )
    }
}