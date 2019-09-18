import React, {Component, PropTypes } from 'react';

import RentalData from '../data/bikerentals.json';
import './RentalList.css';

// Toggle component from https://reactjs.org/docs/handling-events.html
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render(){ 
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'Selected' : 'Not Selected'}

      </button>
    );
  }
}

//rendering data from JSON file
class RentalList extends Component {
  render() {
    return (
      <div>
        <h1>Hello There</h1>
        <div className="card">
        {RentalData['products'].map((rentalDetail, index) => {
            return <div className="card-item">
              <h1>{rentalDetail.name}</h1>
            <h3>{rentalDetail.price}</h3>
            <Toggle />
        </div>
        })}
        </div>
      </div>
    );
  }
}

export default RentalList
