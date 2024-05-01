import React from "react";
import Stock from "./Stock";

function StockContainer({
  stockList,
  onBuyStock,
  selectedFilter,
  selectedSortValue,
}) {
  if (selectedSortValue === "Alphabetically") {
    stockList.sort((a, b) => a.name.localeCompare(b.name));
  } else if (selectedSortValue === "Price") {
    stockList.sort((a, b) => a.price - b.price);
  }

  stockList = stockList.filter((stock) => {
    if (selectedFilter === "All") {
      return true;
    } else {
      return stock.type === selectedFilter;
    }
  });

  return (
    <div>
      <h2>Stocks</h2>

      <ul>
        {stockList.map((stock) => (
          <Stock stockItem={stock} onBuyStock={onBuyStock} />
        ))}
      </ul>
    </div>
  );
}

export default StockContainer;
