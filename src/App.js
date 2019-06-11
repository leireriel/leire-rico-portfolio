import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Developer from './components/Developer';
import Projects from './components/Projects';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <p>hola</p>
        <Header />
        <Hero />
        <Developer />
        <Projects />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
