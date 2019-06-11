import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Developer from './components/Developer';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <Hero />
          <Developer />
          <Projects />
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
