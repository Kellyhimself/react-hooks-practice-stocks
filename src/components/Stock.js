import React from "react";

function Stock({ stockItem, onBuyStock, onDeleteStock }) {
  const { name, price, id } = stockItem;

  return (
    <div>
      <div className="card" onClick={() => onBuyStock(stockItem)}>
        <div className="card-body" onClick={() => onDeleteStock(stockItem)}>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
