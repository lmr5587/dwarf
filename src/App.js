import React, { Component } from 'react';
import Header from'./Header'
import Adtext from'./Adtext'
import Article from'./Article'
import Otherarticles from'./Otherarticles'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header/>
        <main className="expanded row">

        <Article/>
        <Adtext/>
        <Otherarticles/>
          
        </main>


        <footer className="expanded row">
          <h6>&copy; 2017 Erebor Industries</h6>
          <h6 className="float-right">All rights reserved</h6>
        </footer>
      </div>
    );
  }
}

export default App;
