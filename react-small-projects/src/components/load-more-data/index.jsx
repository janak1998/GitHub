import React, { useEffect, useState } from "react";
import "./styles.css";

export const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableBtn, setDisableBtn] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);

      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const result = await response.json();
      console.log("result", result);
      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

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
