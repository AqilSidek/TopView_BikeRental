import React, { PropTypes } from "react";
import {
  BrowserRouter as Router,
  Link as Hyperlink,
  Route
} from "react-router-dom";
import { connect, Provider } from "react-redux";

import "./App.css";
import "./navbar.css";
import Navbar from './components/Navbar.js';
import RentalList from "./components/RentalList.js";
import rentalData from "./data/bikerentals.json";


export default class App extends React.Component {
  state = {
    bikes: [],
    accessories: [],
    addons: []
  };

  componentDidMount() {
    let dataString = JSON.stringify(rentalData);
    let data = JSON.parse(dataString);

    // new arrays with bikes, accessories & insurance separated
    let bikes = [];
    let accessories = [];
    let addons = [];

    data["products"].map(x => {
      if (x.product_type === "bike") bikes.push(x);
      if (x.product_type === "accessory") accessories.push(x);
      if (x.product_type === "addon") addons.push(x);

      return x;
    });

    this.setState({
      bikes: bikes,
      accessories: accessories,
      addons: addons
    });
    // console.log(bikes);
    // console.log(accessories);
    // console.log(addons);
  }

  render() {
    return (
      <div className="App">
        <Navbar />

        <div className="landing-page">
          <div className="headertext">
            <h1>
              Explore
              <br />
              the Big Apple by bike!
            </h1>
          </div>
        </div>
        {/* <div className="accordion">
          <Accordion bikes={this.state.bikes} />
        </div> */}

        <div className="rentals">
          <RentalList />
        </div>
      </div>
    );
  }
}

// Acknowledgements:
// Photo by Mike C. Valdivia on Unsplash (https://unsplash.com/photos/kZokA2VTKn4)
