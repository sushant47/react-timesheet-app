import React, { Component } from 'react';
import './App.css';
import { DiscoDashboard } from './components/disco/DiscoDashboard';

export class App extends Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <DiscoDashboard />
    )
  }
}
export default App;
