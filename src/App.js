import React, { Component } from 'react';
import Header from'./Header'
import Adtext from'./Adtext'
import Article from'./Article'
import Otherarticles from'./Otherarticles'
import Footer from'./Footer'
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

        <Footer/>
        
      </div>
    );
  }
}

export default App;
