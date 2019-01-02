import React from "react";
import ReactDOM from "react-dom";
// import App from "./App.js";
import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import Display from './components/Display'
// import Submit from './components/Submit'


ReactDOM.render(<Header />, document.getElementById("header"));
ReactDOM.render(<MainContent />, document.getElementById("right"));
ReactDOM.render(<Display />, document.getElementById("left"));
ReactDOM.render(<Footer />, document.getElementById("footer"));
//ReactDOM.render(<Submit />, document.getElementById("main"));
