import React from "react";

const FooterLinks = () => {
  return (
    <div className="footer-links-wrapper  flex flex-wrap lg:justify-between md:flex-nowrap gap-5">
      <div>
        <img src="logo.svg" alt="logo" />
        <p className="text-[10px] leading-3 text-[#5E5E5E] w-[155px]">
          Copyright © 2024 EndlessDS. All Rights Reserved
        </p>
      </div>
      <div className="company-links flex-col flex min-w-[155px]">
        <p className="link-heading text-lg leading-[21.6px] tracking-[7%]">
          COMPANY
        </p>
        <a href="#" className="text-base leading-[19.2px] ">
          link
        </a>
        <a href="#" className="text-base leading-[19.2px] ">
          link
        </a>
        <a href="#" className="text-base leading-[19.2px] ">
          link
        </a>
      </div>
      <div className="about-links flex-col flex min-w-[155px]">
        <p className="link-heading text-lg leading-[21.6px] tracking-[7%]">
          ABOUT
        </p>
        <a href="#" className="text-base leading-[19.2px] ">
          link
        </a>
        <a href="#" className="text-base leading-[19.2px] ">
          link
        </a>
        <a href="#" className="text-base leading-[19.2px] ">
          link
        </a>
      </div>
      <div className="socials min-w-[155px]">
        <p className="link-heading text-lg leading-[21.6px] tracking-[7%]">
          CONTACT
        </p>
        <div className="flex gap-2">
          <img
            src="social-ico-1.svg"
            alt="social icon"
            width={20}
            height={20}
          />
          <img
            src="social-ico-1.svg"
            alt="social icon"
            width={20}
            height={20}
          />
          <img
            src="social-ico-1.svg"
            alt="social icon"
            width={20}
            height={20}
          />
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
