import React from "react";

const Products = () => {
  return (
    <div className="flex-col sm:flex-row mx-6 flex justify-between gap-5 md:gap-28 my-6">
      <img src="/product.jpg" alt="product image" height={457} width={481} />
      <div className="">
        <p className="text-[34px] leading-[40.8px] font-bold	">Lorem ipsum</p>
        <p className="text-xs leading-[19.2px] font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor-Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor-Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor-Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor- Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor-Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor-
        </p>
      </div>
    </div>
  );
};

export default Products;
