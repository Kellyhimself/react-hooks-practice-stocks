import React, { useState } from "react";
import Stock from "./Stock";

function PortfolioContainer({ myPortfolio, onDeleteStock }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        //render your portfolio stocks here
      }
      <ul>
        {myPortfolio.map((stock) => (
          <Stock stockItem={stock} onDeleteStock={onDeleteStock} />
        ))}
      </ul>
    </div>
  );
}

export default PortfolioContainer;
