import React from "react";

import "./orderList.css";
import GalleryFilter from "../GalleryView/galleryFilter";

const OrderList = () => {
  return (
    <div className="order-list">
      <div>
        <GalleryFilter />
        <div>
          <h3>Nome pedido</h3>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
