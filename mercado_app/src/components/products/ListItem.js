import * as React from "react";
import * as productImage from "./../../data/450_1000.jpg";
import "./productComponets.scss";
import { Link } from "react-router-dom";
import { currencyMask } from "./../../utils/currencyMask";

const ListItem = (props) => (
  <div className="listItem">
    <img src={productImage} />
    <div className="listItem_details">
      <span className="listItem_details-price">{currencyMask(1900)}</span>
      <p>
        asdasdfasdfsafdsaasdasd asdad iaspabsd 214723131723 sajdfsassdfgasd
        123123
      </p>
    </div>
    <div className="listItem_location">
      <span>Mendoza</span>
    </div>

    <Link to={`/item/${props.id}`}>Show details</Link>
  </div>
);

export default ListItem;
