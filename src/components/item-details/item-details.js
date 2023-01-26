import React from "react";
import SwapiService from "../../services/swapi-service";
import ErrorButton from "../error-button/error-button";
import Spinner from "../spinner";
import "./item-details.css";

class ItemDetails extends React.Component {
  swapiService = new SwapiService();

  state = {
    item: null,
    image: null,
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      return;
    }
    getData(itemId).then((item) => {
      this.setState({
        item,
        image: getImageUrl(item),
      });
    });
  }

  render() {
    const { item, image } = this.state;
    if (!item) {
      return <Spinner />;
    }
    const {id, name, gender, birthYear, eyeColor } = item;
    return (
      <div className="person-details card">
        <img className="person-image" src={image} alt="item" />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
          <ErrorButton />
        </div>
      </div>
    );
  }
}
export default ItemDetails;
