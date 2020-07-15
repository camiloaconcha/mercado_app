import React from "react";

const Categories = ({ products }) => {
  return (
    <div className="products_categories">
      {products.categories.map((category, index) => {
        return <span key={index}>{category} ></span>;
      })}
    </div>
  );
};

export default Categories;
