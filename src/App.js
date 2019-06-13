import React, { Component, Fragment } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Developer from './components/Developer';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <NavBar />
        </header>
        <main>
          <Hero />
          <Developer />
          <Projects />
        </main>
        <footer>
          <Contact />
        </footer>
      </Fragment>
    );
  }
}

export default App;
