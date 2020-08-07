import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
// import { Router } from 'react-router-dom';
import About from "./pages/About";
import Header from './pages/Header';
import FindBooks from "./FindBooks"
import ShareBooks from "./ShareBooks"
class App extends React.Component {
  render(){
  return (
    <Router>
      <div className="App">
      <Header/>
      {/* <BookItem/> */}
        <Route exact path="/" component={ FindBooks } /> 
        <Route path="/sharebooks" component={ShareBooks} />
        <Route path="/about" component={About} />
      </div>

    </Router>
    
  );
  }
}

export default App;
