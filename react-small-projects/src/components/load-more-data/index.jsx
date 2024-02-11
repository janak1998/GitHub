import React, { useEffect, useState } from "react";
import "./styles.css";

export const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  //loading state
  const [products, setProducts] = useState([]);
  // button click count state
  const [count, setCount] = useState(0);
  //disable btn state
  const [disableBtn, setDisableBtn] = useState(false);

  //async await for fetching date with fetch api
  async function fetchProducts() {
    try {
      //initially loading state is true
      setLoading(true);

      //response variable has data from fetch call
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      // result has json converted data from response
      const result = await response.json();
      console.log("result", result);

      //condition to check result, products and product lenth -> if all checks then add data in products, added prevData to handle existing data
      if (result && result.products && result.products.length) {
        //combine previous data n new data
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  //useEffect for conditional rendering dependent on count(clicked) state
  useEffect(() => {
    fetchProducts();
  }, [count]);

  //conditionally set btn disable dependednt on products
  useEffect(() => {
    if (products && products.length === 100) setDisableBtn(true);
  }, [products]);

  if (loading) {
    return <div>Loading Data ! Please wait</div>;
  }

  return (
    <div className="load-more-container flex flex-col gap-3 h-auto">
      <div className="product-container">
        {products && products.length
          ? products.map((item, index) => (
              <div key={item.id} className="product">
                <span>{item.id}</span>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container flex justify-center flex-col items-center gap-3 pb-5">
        <button
          disabled={disableBtn}
          onClick={() => setCount(count + 1)}
          className={` ${
            disableBtn ? "bg-gray-500 hover:border-gray-500 border" : ""
          }  max-w-[250px]`}
        >
          Load More
        </button>
        {disableBtn ? <p>You have reached to 100 products</p> : null}
      </div>
    </div>
  );
};
