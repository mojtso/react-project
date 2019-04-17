import React, { Component } from 'react';
import { Button } from './components';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>Hello!</h1>
        <Button type="primary" className="qwe" size="large">This is a Button</Button>
      </div>
    )
  }
}

export default App;
