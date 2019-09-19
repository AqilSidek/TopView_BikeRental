import React from 'react';

// importing CSS
import './App.css';
import './components/Navbar.css';

//importing components
import Navbar from './components/Navbar.js';
import RentalList from './components/RentalList.js';

export default class App extends React.Component {
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

        <div>
          <RentalList />
        </div>
      </div>
    );
  }
}

// Acknowledgements:
// Photo by Mike C. Valdivia on Unsplash (https://unsplash.com/photos/kZokA2VTKn4)
