import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

import {pymSendHeight} from '../utils/handlePym'

class Main extends React.Component {

  componentDidMount() {
    // This is intended to fix bug where app is clipped at bottom
    // on initial load.
    pymSendHeight({timeout: 500})
    pymSendHeight({timeout: 1000})
  }

  componentDidUpdate() {
    // Because our app changes height based on displayed content, we 
    // update the iframe height after DOM elements have been updated.
    pymSendHeight()
  }

  render() {

    return (
      <div className="container__outer">
        <div className="container__inner">
          <Header />
          <Body data={this.props.data} /> 
          <Footer 
            byline="Daniel Simmons-Ritchie"
            source="Reported data is based on Pa. Department of Health data compiled daily by Spotlight PA/the Philadelphia Inquirer since March. Occurred data is based on Pa. Department of Health statistics collated on June 16."
            outlet="Spotlight PA"
            outletUrl="https://www.spotlightpa.org/"
          />
        </div>
      </div>
    );
  }
}

export default Main;
