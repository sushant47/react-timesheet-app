import React, { Component } from 'react';
import './App.css';
import { DiscoDashboard } from './components/DiscoDashboard';

export class App extends Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <DiscoDashboard />
        <br />
      </div>
    )
  }
}
export default App;
