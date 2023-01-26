import React from "react";
import "./App.css";
import Header from "../header";
import RandomPlanet from "../random-palnet";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ItemDetails from "../item-details";

import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList,
} from "../sw-components";

class App extends React.Component {
  swapiService = new SwapiService();

  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const {
      getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage,
      getAllPeople,
      getAllPlanet,
    } = this.swapiService;

    return (
      <div className="App">
        <Header />
        <RandomPlanet />

        <PersonList>{({ name }) => <span>{name}</span>}</PersonList>

        <StarshipList>{({ name }) => <span>{name}</span>}</StarshipList>

        <PlanetList>{({ name }) => <span>{name}</span>}</PlanetList>

        <PersonDetails itemId={11} />
        <StarshipDetails itemId={11} />
        <PlanetDetails itemId={11} />
      </div>
    );
  }
}
export default App;
