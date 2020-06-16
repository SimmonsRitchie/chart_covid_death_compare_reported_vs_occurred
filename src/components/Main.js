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
            source="Reported death data is based on statistics reported on the website of the Pa. Departhment of Health and collected daily by Spotlight PA/the Philadelphia Inquirer between March to June, 2020. Occurred death data is based on separate Pa. Department of Health statistics collated on June 16, 2020."
            outlet="Spotlight PA"
            outletUrl="https://www.spotlightpa.org/"
          />
        </div>
      </div>
    );
  }
}

export default Main;
