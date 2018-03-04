import React, { Component } from 'react';
import Container from './components/Container/Container';
import Manager from './modules/Manager';

export default class App extends Component {
  render() {
    return (
      <Container link="Loja" to="/store" spacer>
        <Manager />
      </Container>
    );
  }
}
