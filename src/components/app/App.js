import React from "react";
import "./App.css";
import Header from "../header";
import RandomPlanet from "../random-palnet";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../sw-components/swapi-service-context";

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
        <SwapiServiceProvider value={this.swapiService}>
          <Header />
          <RandomPlanet />

          <PersonList />

          <StarshipList />

          <PlanetList />

          <PersonDetails itemId={11} />
          <StarshipDetails itemId={11} />
          <PlanetDetails itemId={11} />
        </SwapiServiceProvider>
      </div>
    );
  }
}
export default App;
