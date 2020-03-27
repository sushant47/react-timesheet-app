import React, { Component } from 'react';
import './App.css';
import { MemeGenerator } from './components/MemeGenerator';
import { MemeHeader } from './components/MemeHeader';

export class App extends Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <MemeHeader />
        <br />
        <MemeGenerator />
      </div>
    )
  }
}
export default App;
