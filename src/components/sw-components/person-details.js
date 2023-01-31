import React from "react";
import ItemDetails from "../item-details";
import { withSwapiService } from "../hoc-helper";

const PersonDetails = (props) => {
  return (
    <ItemDetails {...props}/>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage,
  };
};
export default withSwapiService(PersonDetails, mapMethodsToProps);
