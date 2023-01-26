import React from "react";
import ItemList from "../item-list";
import { withData } from "../hoc-helper";
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService();
const { getAllPeople, getAllStarsips, getAllPlanet } = swapiService;


const PersonList = withData(ItemList, getAllPeople);

const PlanetList = withData(ItemList, getAllPlanet);

const StarshipList = withData(ItemList, getAllStarsips);

export { PersonList, PlanetList, StarshipList };
