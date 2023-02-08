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
import ErrorBoundry from "../error-boundry/error-boundry";
import ErrorButton from "../error-button/error-button";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StartPage from "../pages/start-page";

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
        <ErrorBoundry>
          <SwapiServiceProvider value={this.swapiService}>
            <Router>
              <Header />
              <RandomPlanet />
              <Routes>
                <Route path="/" element={<StartPage />} exact/>
                <Route path="people" element={<PeoplePage />} />
                <Route path="planets" element={<PlanetsPage />} />
                <Route path="starships" element={<StarshipsPage />} />
              </Routes>
            </Router>
            <ErrorButton />
          </SwapiServiceProvider>
        </ErrorBoundry>
      </div>
    );
  }
}
export default App;
