import React from "react";
import * as shippingIcon from "./../../assets/ic_shipping@2x.png.png";
import { currencyMask } from "./../../utils/currencyMask";
const ProductDetail = ({ item }) => {
  const price = item.price ? Object.values(item.price) : 0;

  return (
    <section className="detail">
      <div className="productDetails">
        <div className="productDetails_image">
          <img src={item.picture} alt="item" />
        </div>

        <div className="productDetails_data">
          <span className="productDetails_data-status">
            {item.condition === "new" ? "Nuevo" : "Usado"} {item.sold_quantity}{" "}
            Vendidos
          </span>
          <span className="productDetails_data-name">{item.title}</span>
          <span className="productDetails_data-price">
            {currencyMask(price[1])}
            {item.free_shipping && (
              <img
                className="productDetails_data-shipping"
                src={shippingIcon}
                alt="free shipping"
              />
            )}
          </span>
          <button className="productDetails_data-buy">Comprar</button>
        </div>
      </div>

      <div className="productDescription">
        <span className="productDescription_title">
          Descripción del producto
        </span>
        <p className="productDescription_text">{item.description}</p>
      </div>
    </section>
  );
};
export default ProductDetail;
