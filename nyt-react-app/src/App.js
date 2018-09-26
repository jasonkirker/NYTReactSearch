import React, { Component } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div>
        <Navbar inverse fixedTop>
          {/* <Grid> */}
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">NYT React</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          {/* </Grid> */}
        </Navbar>
        <Jumbotron>
          {/* <Grid> */}
            <h1>Welcome to NYT React Scraper</h1>
            <p>
              <Button
                bsStyle="success"
                bsSize="large"
                href="http://react-bootstrap.github.io/components.html"
                target="_blank">
                View React Bootstrap Docs
              </Button>
            </p>
          {/* </Grid> */}
        </Jumbotron>
      </div>



        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
