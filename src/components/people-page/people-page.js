import React from "react";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry/error-boundry";
import ErrorIndicator from "../error-indicator";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import Row from "../row";
import "./people-page.css";

class PeoplePage extends React.Component {
  swapiService = new SwapiService();
  state = {
    selectedPerson: 1,
    hasError: false,
  };

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
    });
  }

  onItemSelected = (id) => {
    this.setState({ selectedPerson: id });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    const itemList = (
      <ErrorBoundry>
        <ItemList
          onItemSelected={this.onItemSelected}
          getData={this.swapiService.getAllPeople}
          renderItem={(item) => item.name}
        />
      </ErrorBoundry>
    );

    const personDetails = (
      <ErrorBoundry>
        <PersonDetails personId={this.state.selectedPerson} />
      </ErrorBoundry>
    );
    return <Row left={itemList} right={personDetails} />;
  }
}
export default PeoplePage;
