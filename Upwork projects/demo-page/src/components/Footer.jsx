import React from "react";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <div className="  lg:mx-auto mt-12 mb-10 ">
      <FooterLinks />
      <div className="partners-wrapper ">
        <p className="font-bold text-[10px] leading-3 text-[#5E5E5E] my-3">
          Partners
        </p>
        <div className="partner-image-wrapper flex gap-6">
          <img src="ico-1.svg" alt="partner logo" width={50} height={50} />
          <img src="ico-1.svg" alt="partner logo" width={50} height={50} />
          <img src="ico-1.svg" alt="partner logo" width={50} height={50} />
          <img src="ico-1.svg" alt="partner logo" width={50} height={50} />
        </div>
      </div>
      <div className="confinanciamento-wrapper">
        <p className="font-bold text-[10px] leading-3 text-[#5E5E5E] my-3">
          Confinanciamento
        </p>
        <div className="Confinanciamento-image-wrapper flex gap-8">
          <img
            src="conf-logo-1.svg"
            alt="partner logo"
            width={159}
            height={63}
          />
          <img src="ico-1.svg" alt="conf logo" width={63} height={63} />
          <img src="ico-1.svg" alt="conf logo" width={63} height={63} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
