import React from "react";
import ErrorBoundry from "../error-boundry/error-boundry";
import Row from "../row";
import { StarshipDetails, StarshipList } from "../sw-components";

class StarshipsPage extends React.Component {
  state = {
    selectedItem: 9,
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    const { selectedItem } = this.state;

    return (
      <ErrorBoundry>
        <Row
          left={<StarshipList onItemSelected={this.onItemSelected} />}
          right={<StarshipDetails itemId={selectedItem} />}
        />
      </ErrorBoundry>
    );
  }
}
export default StarshipsPage;
