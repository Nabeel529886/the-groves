import RightArrow from "@/components/Icons/RightArrow";
import React from "react";

const AccessTicketCard = () => {
  return (
    <div className="possibility_card__root md_container">
      <span>25 SR/GUEST</span>
      <div className="possibility_card__title">
        <h3>Get your General Access Ticket</h3>
        <RightArrow className="possibility_card__desktop_icon" />
      </div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry’s standard dummy text e
      </p>
      <RightArrow className="possibility_card__mobile_icon" />
    </div>
  );
};

export default AccessTicketCard;
