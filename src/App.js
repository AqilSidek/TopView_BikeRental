import React from "react";
import "./App.css";
import "./navbar.css";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Accordion from "./components/Accordion.js";
import {
  BrowserRouter as Router,
  Link as Hyperlink,
  Route
} from "react-router-dom";

import rentalData from "./data/bikerentals.json";

function AboutUs() {
  return <About />;
}

function ContactUs() {
  return <Contact />;
}
export default class App extends React.Component {


  state={
    bikes: [],
    accessories: [],
    addons: []
  }



  componentDidMount() {
    let dataString = JSON.stringify(rentalData);
    let data = JSON.parse(dataString);

    // new arrays with bikes, accessories & insurance separated
    let bikes = [];
    let accessories = [];
    let addons = [];

    data["products"].map(x => {
      if (x.product_type === "bike") bikes.push(x);
      if(x.product_type === "accessory") accessories.push(x);
      if(x.product_type === "addon") addons.push(x);

      return x;
    });

    this.setState({
      bikes: bikes,
      accessories: accessories,
      addons: addons
    })
    // console.log(bikes);
    // console.log(accessories);
    // console.log(addons);

  }
  render() {
    return (
      <div className="App">
        <div className="navbar-wrapper">
          <Router>
            <div>
              <Hyperlink to="/">
                <img
                  src={require("./media/topview-nyc-coupons.png")}
                  alt="icon"
                  className="logo"
                />
              </Hyperlink>
            </div>
            <div className="links-wrapper">
              <div className="link-item">
                <a
                  href="https://www.topviewnyc.com/packages/"
                  className="link-text"
                >
                  <p>Our Other Tours</p>
                </a>
              </div>
              <div className="link-item">
                <Hyperlink to="/about/" className="link-text">
                  <p>About Us</p>
                </Hyperlink>
              </div>
              <div className="link-item">
                <Hyperlink to="/contact/" className="link-text">
                  <p>Contact</p>
                </Hyperlink>
              </div>

              <Route path="/about/" component={AboutUs} />
              <Route path="/contact/" component={ContactUs} />
            </div>
          </Router>
        </div>

        <div className="landing-page">
          <div className="headertext">
            <h1>
              Explore
              <br />
              the Big Apple by bike!
            </h1>
          </div>
        </div>
        <div className="accordion">
          <Accordion bikes={this.state.bikes} />
        </div>
      </div>
    );
  }
}

// Acknowledgements:
// Photo by Mike C. Valdivia on Unsplash (https://unsplash.com/photos/kZokA2VTKn4)
