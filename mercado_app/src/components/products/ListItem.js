import * as React from "react";
import "./productComponets.scss";
import { Link } from "react-router-dom";
import { currencyMask } from "./../../utils/currencyMask";
import * as shippingIcon from "./../../assets/ic_shipping.png";

const ListItem = ({ item }) => {
  return (
    <Link to={`/item/${item.id}`} className="link">
      <div className="listItem">
        <img src={item.picture} alt="item" />
        <div className="listItem_details">
          <span className="listItem_details-price">
            {currencyMask(item.price.amount)}
            {item.free_shipping && (
              <img
                className="listItem_shipping"
                src={shippingIcon}
                alt="shipping_icon"
              />
            )}
          </span>
          <p>{item.title}</p>
        </div>
        <div className="listItem_location">
          <span>{item.address}</span>
        </div>
      </div>
    </Link>
  );
};
export default ListItem;
