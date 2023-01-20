import React from "react";
import "./App.css";
import Header from "../header";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import RandomPlanet from "../random-palnet";

class App extends React.Component {
  state = {
    selectedPerson: null,
  };
  onItemSelected = (id) => {
    this.setState({ selectedPerson: id });
  };
  render() {
    return (
      <div className="App">
        <Header />
        <RandomPlanet />
        <div className="wor mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onItemSelected}/>
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
