import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainContent />
        <Footer />
      </div>
    );
  }
}

export default hot(module)(App);
