import React from "react";

const Clients = () => {
  return (
    <div className="mx-6 my-6">
      <p className="text-[34px] leading-[40.8px] font-bold	text-center mb-4">
        OUR CLIENTS
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        <img src="ico-1.jpg" alt="client image" height={100} width={100} />
        <img src="ico-1.jpg" alt="client image" height={100} width={100} />
        <img src="ico-1.jpg" alt="client image" height={100} width={100} />
        <img src="ico-1.jpg" alt="client image" height={100} width={100} />
        <img src="ico-1.jpg" alt="client image" height={100} width={100} />
      </div>
    </div>
  );
};

export default Clients;
