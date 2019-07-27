import React from 'react';
import { connect } from "react-redux";
import logo from './logo.svg';
import './App.css';

import { helloWorld } from "./store/actions/application";

class App extends React.Component{
  render(){
    setTimeout(() => {
      if(this.props.helloWorld) this.props.helloWorld();
    }, 4000)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.props.title}
          </a>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    title: state.application.title
  });
}

const mapDispatchToProps = { helloWorld }

export default connect(mapStateToProps, mapDispatchToProps)(App);