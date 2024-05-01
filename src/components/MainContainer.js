import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

/*  */
function MainContainer() {
  //within this parent component we define the state of the stocklist and the myPorftfolio.
  const [stockList, setStockList] = useState([]);
  const [myPortfolio, setMyPortfolio] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedSortValue, setSelectedSortValue] = useState("Alphabetically");

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((res) => res.json())
      .then((data) => setStockList(data));
  }, []);

  //within the parent component again, is where we define the function that will update the myPortfolio state
  const addStockToPortfolio = (stockItem) => {
    // Add the stock to the portfolio
    setMyPortfolio([...myPortfolio, stockItem]);
  };
  //function to sell stock
  const sellStock = (stockItem) => {
    const newPortfolio = myPortfolio.filter(
      (stock) => stock.id !== stockItem.id
    );
    setMyPortfolio(newPortfolio);
  };

  //function to filter
  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };
  //function to sort
  const handleSortChange = (event) => {
    setSelectedSortValue(event.target.value);
  };
  return (
    <div>
      <SearchBar
        onFilterValueChange={handleFilterChange}
        onSortValueChange={handleSortChange}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer
            stockList={stockList}
            onBuyStock={addStockToPortfolio} //passing the addSt as a prop to the StockContainer
            //this two below are not complecated because we are
            //just passing functions as props from parent to child components
            selectedFilter={selectedFilter}
            selectedSortValue={selectedSortValue}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer
            myPortfolio={myPortfolio}
            onDeleteStock={sellStock}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
