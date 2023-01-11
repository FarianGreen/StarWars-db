import React from "react";
import './App.css';
import Header from "../header";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import RandomPlanet from "../random-palnet";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <RandomPlanet />
        <div className="wor mb2">
          <div className="col-md-6">
            <ItemList />
          </div>
          <div className="col-md-6">
            <PersonDetails />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
