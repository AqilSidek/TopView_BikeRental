import React, { Component } from "react";

import RentalData from "../data/bikerentals.json";
import "./RentalList.css";

class RentalList extends Component {
  // initializing state
  state = {
    selected: []
  };

  // function to add items to cart array
  // cart array is array of items user has selected
  handleSelected(selectedName, selectedPrice) {
    let cart = this.state.selected;
    let obj = {
      name: selectedName,
      price: selectedPrice
    };

    cart.push(obj);
    this.setState({ selected: cart });
    console.log("Selected Items: ", this.state.selected);
  }

  // function to remove items from cart array
  handleDeselect(selectedName) {
    let cart = [...this.state.selected];

    var index = cart.findIndex(x => x.name === selectedName);
    if (index > -1) {
      cart.splice(index, 1);
      this.setState({ selected: cart });
      console.log("Items left: ", this.state.selected);
    }
  }

  // checkout button resets cart array i.e. a purchase was made
  handleCheckout() {
    let cart = [...this.state.selected];
    cart = [];
    this.setState({ selected: cart });
    console.log("Array is now empty", cart);
  }

  render() {
    return (
      <div>
        <div className="card">
          {/* displaying and selecting available rental items */}
          {RentalData["products"].map((rentalDetail, index) => {
            return (
              <div className="card-item">
                <h1 className="item">Item: {rentalDetail.name}</h1>
                <h3 className="price">Price: {rentalDetail.price}</h3>
                <div className="buttons">
                  <div>
                    <button
                      onClick={() =>
                        this.handleSelected(
                          rentalDetail.name,
                          rentalDetail.price
                        )
                      }
                    >
                      <h5>Add Item</h5>
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() =>
                        this.handleDeselect(
                          rentalDetail.name,
                          rentalDetail.price
                        )
                      }
                    >
                      <h5>Remove Item</h5>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* checkout section */}
        <div className="cart">
          <div className="checkout-button">
            <button onClick={() => this.handleCheckout()}></button>
          </div>
        </div>

      </div>
    );
  }
}

export default RentalList;
