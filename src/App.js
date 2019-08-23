import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Componentes
import Header from './Layout/Header';
import Menu from './Layout/Menu';
import Footer from './Layout/Footer';
import Content from './Layout/Content';


export class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Menu />
          <Content />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
