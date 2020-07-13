import React, { Component } from "react";
import "./productsList.scss";
import * as photo from "./../../data/450_1000.jpg";
import {currencyMask  } from "./../../utils/currencyMask";
class ProductDetail extends Component {
  state = {};
  render() {
    return (
      <div className="detail">
        <div className="productDetails">
          <div className="productDetails_image">
            <img src={photo} />
          </div>

          <div className="productDetails_data">
            <span className="productDetails_data-status">
              Nuevo-234 vendidos
            </span>
            <span className="productDetails_data-name">
              Deco Reverse ASDASDAS dddsda
            </span>
            <span className="productDetails_data-price">{currencyMask(1900)}</span>
            <button className="productDetails_data-buy">Comprar</button>
          </div>
        </div>

        <div className="productDescription">
          <span className='productDescription_title'>Descripción del producto</span>
          <p className='productDescription_text'>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
