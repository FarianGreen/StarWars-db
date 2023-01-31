import React from "react";
import "./App.css";
import Header from "../header";
import RandomPlanet from "../random-palnet";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../sw-components/swapi-service-context";
import PeoplePage from "../pages/people-page";
import PlanetsPage from "../pages/planets-page";
import StarshipsPage from "../pages/starships-page";

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

    return (
      <div className="App">
        <SwapiServiceProvider value={this.swapiService}>
          <Header />
          <RandomPlanet />
          <PeoplePage />
          <PlanetsPage />
          <StarshipsPage />
        </SwapiServiceProvider>
      </div>
    );
  }
}
export default App;
