import React, { Component } from 'react';
import Router from './routes'
import { Container } from 'reactstrap'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Container>
            <Router />
          </Container>
      </div>
    );
  }
}

export default App;
