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

    var totalPrice = this.state.selected.reduce(function(prev, cur) {
      return prev + cur.price;
    }, 0);

    return (
      <div>
        <h1 className="section-header">Items</h1>
        <div className="card">
          {/* displaying and selecting available rental items */}
          {RentalData["products"].map((rentalDetail, index) => {
            return (
              <div className="card-item">
                <h2 className="item">{rentalDetail.name}</h2>
                <h3 className="price">${rentalDetail.price}</h3>
                <div className="buttons">
                  <div>
                    <button className="add-remove"
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
                    <button className="add-remove"
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
        <div>
          <h1 className="section-header">Cart</h1>
          <div className="cart">
            <div>
              {this.state.selected.map((cartItem, index) => {
                return (
                  <div className="cart-items">
                    <div>
                      <p>{cartItem.name}</p>
                    </div>
                    <div>
                      <p>${cartItem.price}</p>
                    </div>
                  </div>
                );
              })}


              
            </div>
            <h3 className="price">Total price: ${totalPrice}</h3>
            <div className="checkout-button">
              <button className="checkout" onClick={() => this.handleCheckout()}>Checkout</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RentalList;
