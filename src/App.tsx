import React from "react";
import { Route } from "react-router-dom";
import { AboutPage } from "./Pages/About/AboutPage";
import { ContactPage } from "./Pages/Contact/ContactPage";
import { HomePage } from "./Pages/Home/HomePage";
import { NotFound } from "./Pages/NotFound";

export class App extends React.Component {
  render() {
    return (
      React.createElement('div', {},
        React.createElement(Route, { path: '/', component: HomePage }),
        React.createElement(Route, { path: '/about', component: AboutPage }),
        React.createElement(Route, { path: '/contact', component: ContactPage }),
        React.createElement(Route, { path: '', component: NotFound }),
        // React.createElement(HomePage)
      )
    );
  }
}

// default export App
