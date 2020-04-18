import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from "./views/Home";
import Linguistics from "./views/Linguistics";
import Posts from "./views/Linguistics/Posts";
import Podcast from "./views/Linguistics/Podcast";
import Infographics from "./views/Linguistics/Infographics";
import Lessons from "./views/Linguistics/Lessons";
import Phonology from "./views/Linguistics/Phonology";
import Etymology from "./views/Linguistics/Etymology";
import Projects from "./views/Projects";
import Fonetikas from "./views/WebDevProjects/Fonetikas";
import Plantiful from "./views/WebDevProjects/Plantiful";
import BailoApp from "./views/WebDevProjects/BailoApp";
import ReactChallenge from "./views/WebDevProjects/ReactChallenge";
import Portfolio from "./views/WebDevProjects/Portfolio";
import ReactGraphQL from "./views/WebDevProjects/ReactGraphQL";
import Notebook from "./views/Notebook";

import About from "./views/About";
import Contact from "./views/Contact";
import { Footer } from "./Components/Footer";
import NoMatch from "./views/NoMatch";

import { Layout } from "./Components/Layout";
import { NavigationBar } from "./Components/NavigationBar";
import { Jumbotron } from './Components/Jumbotron';

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
              <Route exact path="/about" component={About} />
              <Route exact path="/linguistics" component={Linguistics} />
              <Route exact path="/linguistics/posts" component={Posts} />
              <Route exact path="/linguistics/podcast" component={Podcast} />
              <Route exact path="/linguistics/infographics" component={Infographics} />
              <Route exact path="/linguistics/lessons" component={Lessons} />
              <Route exact path="/linguistics/phonology" component={Phonology} />
              <Route exact path="/linguistics/etymology" component={Etymology} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/projects/fonetikas" component={Fonetikas} />
              <Route exact path="/projects/plantiful" component={Plantiful} />
              <Route exact path="/projects/bailo-app" component={BailoApp} />
              <Route exact path="/projects/react-3-hour-challenge" component={ReactChallenge} />
              <Route exact path="/projects/portfolio" component={Portfolio} />
              <Route exact path="/projects/react-graphql" component={ReactGraphQL} />
              <Route exact path="/notebook" component={Notebook} />
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