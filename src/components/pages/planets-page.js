import React from "react";
import { PlanetDetails, PlanetList } from "../sw-components";
import Row from "../row";
import ErrorBoundry from "../error-boundry/error-boundry";

class PlanetsPage extends React.Component {
  state = {
    selectedItem: 2,
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    const { selectedItem } = this.state;
    return (
      <ErrorBoundry>
        <Row
          left={<PlanetList onItemSelected={this.onItemSelected} />}
          right={<PlanetDetails itemId={selectedItem} />}
        />
      </ErrorBoundry>
    );
  }
}
export default PlanetsPage;
