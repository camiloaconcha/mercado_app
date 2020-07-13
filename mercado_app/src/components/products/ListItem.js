import * as React from "react";
import * as productImage from "./../../data/450_1000.jpg";
import "./productComponets.scss";
const ListItem = (props) => (
  <div className="listItem">
    <img src={productImage} />
    <div className="listItem_details">
      <span className="listItem_details-price">{formatNumber(1900)}</span>
      <p>asdasdfasdfsafdsaasdasd asdad   iaspabsd 214723131723 sajdfsassdfgasd 123123</p>
    </div>
    <div className="listItem_location">
      <span>Mendoza</span>
    </div>
  </div>
);

const formatNumber = (number) =>
  
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(number)
  

export default ListItem;
