import React from "react";
import "./App.css";
import Header from "../header";
import RandomPlanet from "../random-palnet";
import ErrorButton from "../error-button/error-button";
import ErrorIndicator from "../error-indicator";
import PeoplePage from "../people-page";
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ItemDetails from "../item-details";

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
    const personDetails = (
      <ItemDetails getData={this.swapiService.getPerson} itemId={11} getImageUrl={this.swapiService.getPersonImage}/>
    );
    const starshipDetails = (
      <ItemDetails getData={this.swapiService.getStarship} itemId={40} getImageUrl={this.swapiService.getStarshipImage}/>
    );
    return (
      <div className="App">
        <Header />
        <RandomPlanet />
        <Row left={personDetails} right={starshipDetails} />
      </div>
    );
  }
}
export default App;
