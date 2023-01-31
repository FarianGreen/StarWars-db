import React from "react";
import ItemDetails from "../item-details";
import { withSwapiService } from "../hoc-helper";

const StarshipDetails = (props) => {
  return <ItemDetails {...props} />;
};
const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage,
  };
};

export default withSwapiService(StarshipDetails, mapMethodsToProps);
