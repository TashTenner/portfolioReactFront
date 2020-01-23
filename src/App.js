import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from "./views/Home";
import Projects from "./views/Projects";
import Linguistics from "./views/Linguistics";
import About from "./views/About";
import Contact from "./views/Contact";
import { Footer } from "./views/Footer";
import NoMatch from "./views/NoMatch";

import { Layout } from "./Components/Layout";
import { NavigationBar } from "./Components/NavigationBar";
import { Jumbotron } from './Components/Jumbotron';

// add podcast from fonetikas, blog
// some grey: #838383
// dark mode: #4D445C. background light: fcfcff.

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <NavigationBar />
          <Jumbotron />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/linguistics" component={Linguistics} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
            <Footer />
          </Layout>
        </Router>
      </>
    );
  }
}

export default App;