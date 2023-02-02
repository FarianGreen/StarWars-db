import React from "react";
import { PersonDetails, PersonList } from "../sw-components";
import Row from "../row";
import ErrorBoundry from "../error-boundry/error-boundry";

class PeoplePage extends React.Component {
  state = {
    selectedItem: 11,
  };

  onItemSelected = (selectedItem) => {
    this.setState({
      selectedItem,
    });
  };

  render() {
    const { selectedItem } = this.state;

    return (
      <ErrorBoundry>
        <Row
          left={<PersonList onItemSelected={this.onItemSelected} />}
          right={<PersonDetails itemId={selectedItem} />}
        />
      </ErrorBoundry>
    );
  }
}
export default PeoplePage;
