import React from "react";

const FooterDetails = () => {
  return (
    <div className="footer__details">
      <div className="footer__detail">
        <p className="footer__detail__title">LOCATION</p>
        <p className="footer__detail__desc">
          Al-Hizam Park <br /> Al-Semairi, Yanbu Al Bahr 46455 <br /> Riyadh
          Saudi Arabia
        </p>
      </div>
      <div className="footer__detail">
        <p className="footer__detail__title">WORKING HOURS</p>
        <p className="footer__detail__desc">
          Sun until Thurs: 4:00PM <br /> Fri & Sat: 2:30PM <br />
        </p>
        <p className="footer__detail__desc">
          Gates Close at: <br /> Sat until Wed: 12:00AM <br /> Thu & Fri:
          12:30AM
        </p>
      </div>
      <div className="footer__detail">
        <p className="footer__detail__title">GUEST SERVICE CALL</p>
        <p className="footer__detail__desc">
          cc@thegroves-sa.com <br /> 920001672 <br />
          <br /> +966556631309
        </p>
      </div>
    </div>
  );
};

export default FooterDetails;
