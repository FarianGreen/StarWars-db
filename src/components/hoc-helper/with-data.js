import React from "react";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const withData = (View, getData) => {
  return class extends React.Component {
    state = {
      data: null,
    };

    componentDidMount() {
      getData().then((data) => {
        this.setState({ data });
      });
    }

    render() {
      const { data } = this.state;

      if (!data) {
        return <Spinner />;
      }

      return <View {...this.props} data={data} />;
    }
  };
};
export default withData;
