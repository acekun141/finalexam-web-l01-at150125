import React from "react";
import { BiTrash } from "react-icons/bi";

interface IProps {
  type: string;
  last4digit: string;
  date: string;
}

const CreditCard: React.FC<IProps> = ({ type, last4digit, date }) => {
  return (
    <div className="credit-card">
      <p className="credit-card__type">{type}</p>
      <p className="credit-card__number">**** **** **** {last4digit}</p>
      <p className="credit-card__date">{date}</p>
      <button className="credit-card__delete">
        <BiTrash />
      </button>
    </div>
  );
}

export default CreditCard;